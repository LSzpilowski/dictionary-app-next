import React, { useMemo, useState, useEffect } from "react";
import { Meanings } from "./meanings";
import { ExampleResults } from "./exampleResults";
import { Phonetics } from "./phonetics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/CopyButton";
import { BookOpen } from "lucide-react";
import type { IResultsProps } from "@/types";

const POSITIVE_WORDS = [
  "serendipity",
  "eloquent",
  "resilient",
  "innovation",
  "compassion",
  "gratitude",
  "integrity",
  "magnificent",
  "authentic",
  "brilliant",
  "courage",
  "empathy",
  "flourish",
  "harmony",
  "inspire",
  "kindness",
  "luminous",
  "optimism",
  "perseverance",
  "radiant",
  "strength",
  "tranquil",
  "vibrant",
  "wisdom",
  "zenith",
  "altruism",
  "benevolent",
  "dignified",
  "enthusiastic",
  "gracious"
];

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const Results: React.FC<IResultsProps> = ({ results, onSearch }) => {
  const [randomWords, setRandomWords] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setRandomWords(shuffleArray(POSITIVE_WORDS).slice(0, 4));
  }, []);

  if (results) {
    return (
      <div className="flex flex-col gap-5 border-hidden">
        <Card className="card-hover">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl capitalize font-bold">
                {results.word}
              </CardTitle>
              <CopyButton text={results.word} label="Copy word" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
          </CardContent>
        </Card>
        <div className="border-hidden space-y-0">
          {results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center animate-fade-in">
        <div className="mb-4 p-4 rounded-full bg-primary/10">
          <BookOpen className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No results yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Search for any English word to see its definition, pronunciation, and related images.
        </p>
        <div className="w-full max-w-md">
          <p className="text-sm text-muted-foreground mb-3">Try searching for:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {isClient && randomWords.map((word) => (
              <button
                key={word}
                onClick={() => onSearch?.(word)}
                className="synonym-chip cursor-pointer transition-transform hover:scale-105 active:scale-95"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
