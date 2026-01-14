"use client";

import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Search, X, Clock, ChevronDown } from "lucide-react";
import { Results } from "./Dictionary/results";
import { Photos } from "./Dictionary/photos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SkeletonLoader } from "@/components/SkeletonLoader";
import { useDebounce, useCache } from "@/hooks/useDebounceAndCache";
import type { 
  IDictionaryResponse, 
  IPhoto, 
  IPhotoResponse 
} from "@/types";

const MAX_RECENT_SEARCHES = 5;

export const Dictionary: React.FC = () => {
  const [keyWord, setKeyWord] = useState<string>("");
  const [results, setResults] = useState<IDictionaryResponse | null>(null);
  const [photos, setPhotos] = useState<IPhoto[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecent, setShowRecent] = useState<boolean>(false);
  
  const debouncedKeyword = useDebounce(keyWord, 500);
  const dictionaryCache = useCache<IDictionaryResponse>(300000);
  const photoCache = useCache<IPhoto[]>(300000);

  const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

  useEffect(() => {
    const stored = localStorage.getItem("recentSearches");
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
  }, []);
  const addToRecentSearches = (word: string) => {
    const normalized = word.toLowerCase().trim();
    const updated = [
      normalized,
      ...recentSearches.filter((w) => w !== normalized),
    ].slice(0, MAX_RECENT_SEARCHES);
    
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
    toast.success("Recent searches cleared");
  };

  const fetchDictionaryData = async (word: string): Promise<void> => {
    const cachedResult = dictionaryCache.get(word);
    if (cachedResult) {
      setResults(cachedResult);
      return;
    }

    try {
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const response = await axios.get<IDictionaryResponse[]>(apiUrl);
      
      if (!response.data || response.data.length === 0) {
        toast.error("Word not found", {
          description: "We don't have that word in our dictionary."
        });
        setResults(null);
      } else {
        const data = response.data[0];
        setResults(data);
        dictionaryCache.set(word, data);
        addToRecentSearches(word);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        toast.error("Word not found", {
          description: "We don't have that word in our dictionary."
        });
      } else {
        toast.error("Error", {
          description: "Failed to fetch dictionary data. Please try again."
        });
      }
      setResults(null);
    }
  };

  const fetchPhotos = async (word: string): Promise<void> => {
    const cachedPhotos = photoCache.get(word);
    if (cachedPhotos) {
      setPhotos(cachedPhotos);
      return;
    }

    if (!API_KEY) {
      toast.error("Configuration error", {
        description: "Pexels API key is missing."
      });
      return;
    }

    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${word}&per_page=9`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }

      const data: IPhotoResponse = await response.json();

      if (!data || !data.photos || data.photos.length === 0) {
        setPhotos(null);
      } else {
        const transformedPhotos = data.photos.map((photo) => ({
          original: photo.src.original,
          landscape: photo.src.landscape,
        }));
        setPhotos(transformedPhotos);
        photoCache.set(word, transformedPhotos);
      }
    } catch (error) {
      toast.error("Error", {
        description: "Failed to fetch photos. Please try again."
      });
      setPhotos(null);
    }
  };

  const search = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    performSearch(keyWord);
  };

  const performSearch = async (word: string): Promise<void> => {
    if (!word.trim()) {
      toast.warning("Empty search", {
        description: "Please enter a word to search."
      });
      return;
    }

    setIsLoading(true);
    setShowRecent(false);

    try {
      await Promise.all([
        fetchDictionaryData(word.toLowerCase()),
        fetchPhotos(word.toLowerCase())
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const changeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setKeyWord(event.target.value);
  };

  const clearInput = () => {
    setKeyWord("");
    setShowRecent(false);
  };

  const selectRecentSearch = (word: string) => {
    setKeyWord(word);
    setShowRecent(false);
    performSearch(word);
  };

  return (
    <div className="container-responsive py-6 md:py-10">
      <Card className="w-full border-0 md:border">
        <Card className="border-hidden p-4 md:p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl md:text-3xl">
              What word would you like to check?
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <form onSubmit={search} className="space-y-2">
              <div className="relative">
                <div className="search-container">
                  <div className="relative flex-1">
                    <Input
                      onChange={changeSearch}
                      value={keyWord}
                      onFocus={() => setShowRecent(recentSearches.length > 0)}
                      className="hover:bg-secondary pr-10 focus-ring"
                      placeholder="Type a word..."
                      disabled={isLoading}
                      aria-label="Search for a word"
                      aria-describedby="search-hint"
                      autoComplete="off"
                    />
                    {keyWord && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={clearInput}
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                        aria-label="Clear search"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading || !keyWord.trim()}
                    className="search-button gap-2"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {isLoading ? "Searching..." : "Search"}
                    </span>
                  </Button>
                </div>

                
                {showRecent && recentSearches.length > 0 && (
                  <Card className="absolute z-10 w-full mt-2 p-2 animate-slide-in shadow-lg">
                    <div className="flex items-center justify-between px-2 pb-2 border-b">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Recent searches</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearRecentSearches}
                        className="h-auto p-1 text-xs"
                      >
                        Clear
                      </Button>
                    </div>
                    <div className="mt-2 space-y-1">
                      {recentSearches.map((word, index) => (
                        <div
                          key={index}
                          onClick={() => selectRecentSearch(word)}
                          className="recent-search-item"
                        >
                          <span>{word}</span>
                          <ChevronDown className="h-4 w-4 -rotate-90" />
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            </form>
            <p 
              id="search-hint" 
              className="opacity-70 text-xs md:text-sm mt-2"
            >
              e.g.: health, active, hard-working
            </p>
          </CardContent>
          <CardContent className="px-0 pb-0 mt-6">
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              <div className="animate-fade-in">
                <Results results={results} onSearch={performSearch} />
                <Photos photos={photos} />
              </div>
            )}
          </CardContent>
        </Card>
      </Card>
    </div>
  );
};
