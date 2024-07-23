import React from "react";
import { Meanings } from "./meanings";
import { ExampleResults } from "./exampleResults";
import { Phonetics } from "./phonetics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IPhonetic {
  text: string;
  audio: string;
}
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
  phonetics: IPhonetic[];
  meanings: IMeaning[];
}

interface IResultsProps {
  results?: IDictionaryResponse | null;
}

export const Results: React.FC<IResultsProps> = ({ results }) => {
  if (results) {
    return (
      <Card className="flex flex-col gap-5 border-hidden">
        <Card className="hover:bg-secondary">
          <CardHeader>
            <CardTitle>{results.word}</CardTitle>
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
        <Card className="border-hidden">
          {results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings meaning={meaning} />
              </div>
            );
          })}
        </Card>
      </Card>
    );
  } else {
    return <ExampleResults />;
  }
};
