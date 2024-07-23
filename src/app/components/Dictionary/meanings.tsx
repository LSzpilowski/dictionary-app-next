import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IDefinition {
  definition: string;
  example?: string;
}

interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[];
  synonyms?: string[];
}

interface IMeaningsProps {
  meaning: IMeaning;
}

export const Meanings: React.FC<IMeaningsProps> = ({ meaning }) => {
  return (
    <Card className="mb-5 hover:bg-secondary">
      <CardHeader className="gap-5">
        <CardTitle>{meaning.partOfSpeech}</CardTitle>
        <CardContent className="p-0">
          {meaning.definitions.map((definition, index) => (
            <div key={index} className="mb-5">
              <p>
                {index + 1}. {definition.definition}
              </p>
              {definition.example && (
                <p className="opacity-80">e.g.: {definition.example}</p>
              )}
            </div>
          ))}
        </CardContent>
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
