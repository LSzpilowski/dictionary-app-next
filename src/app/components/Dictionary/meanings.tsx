import React from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Meanings = (props) => {
  const { meaning } = props;

  return (
    <Card className="mb-5 hover:bg-secondary">
      <CardHeader className="gap-5">
        <CardTitle >{meaning.partOfSpeech}</CardTitle>
        <CardDescription>{meaning.definitions.map((definition, index) => (
        <div key={index}>
          <p>
            {index + 1}. {definition.definition}
            {definition.example && (
              <p className="opacity-80">
                <br />
                e.g.: {definition.example}
              </p>
            )}
          </p>
        </div>
      ))}</CardDescription>
        {meaning.synonyms && meaning.synonyms.length > 0 && (
        <div>
          <strong>Synonyms: </strong>
          {meaning.synonyms.map((synonym, index) => (
            <span key={index}>{synonym}, </span>
          ))}
        </div>
      )}
      </CardHeader>
      
    </Card>
  );
};
