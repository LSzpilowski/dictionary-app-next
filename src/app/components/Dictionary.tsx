"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Results } from "./Dictionary/results";
import { Photos } from "./Dictionary/photos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert } from "react-bootstrap";

interface IDefinition {
  definition: string;
  example?: string;
}

interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[];
}
interface IDictionaryResponse {
  word: string;
  phonetics: Array<{ text: string; audio: string }>;
  meanings: IMeaning[];
}
interface IPhoto {
  original: string;
  landscape: string;
}

interface IPhotoResponse {
  photos: Array<{ src: { original: string; landscape: string } }>;
}

export const Dictionary: React.FC = () => {
  let [keyWord, setKeyWord] = useState<string>("");
  let [results, setResults] = useState<IDictionaryResponse | null>(null);
  let [photos, setPhotos] = useState<IPhoto[] | null>(null);

  function handleDictionaryResponse(response: { data: IDictionaryResponse[] }) {
    setResults(response.data[0]);
  }

  function getPhotos(data: IPhotoResponse) {
    const transformedPhotos = data.photos.map((photo) => ({
      original: photo.src.original,
      landscape: photo.src.landscape,
    }));
    setPhotos(transformedPhotos);
  }
  
function search(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;

  axios.get(apiUrl)
    .then(response => {
      if (!response.data || response.data.length === 0) {
        alert("We don't have that word");
        setResults(null);
      } else {
        handleDictionaryResponse(response);
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
         alert("We don't have that word");
      } else {
        console.log("Error fetching dictionary data:", error);
      }
      setResults(null); 
    });

  fetch(`https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`, {
    headers: {
      Authorization:
        "U70ZTYYUBbC0tHRpP4TJF8374KVThjwUHC1S4FvsmTeKDlH0FTbpfhnC",
    },
  })
    .then(resp => resp.json())
    .then(data => {
      if (!data || !data.photos || data.photos.length === 0) {
        console.log("No photos available for this word");
        setPhotos(null);  
      } else {
        getPhotos(data);
      }
    })
    .catch(error => {
      console.log("Error fetching photos:", error);
      setPhotos(null);  
    });
}


  function changeSearch(event: ChangeEvent<HTMLInputElement>) {
    setKeyWord(event.target.value);
  }

  return (
    <Card className="md:mt-10 w-full md:w-3/5 border-0 md:border">
      <Card className="border-hidden p-5">
        <CardHeader>
          <CardTitle>What word would you like to check?</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={search}>
            <Input
              onChange={changeSearch}
              className="hover:bg-secondary mb-1"
            />
          </form>
          <p className="opacity-80 text-xs md:text-sm">
            Type any* word in English e.g.: health, active, hard-working
            (*except proper nouns)
          </p>
        </CardContent>
        <CardContent className="pb-0">
          <Results results={results} />
          <Photos photos={photos} />
        </CardContent>
      </Card>
    </Card>
  );
};
