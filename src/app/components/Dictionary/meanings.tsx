import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/CopyButton";
import type { IMeaningsProps } from "@/types";

export const Meanings: React.FC<IMeaningsProps> = ({ meaning }) => {
  return (
    <Card className="mt-5 card-hover">
      <CardHeader className="gap-5">
        <CardTitle className="text-xl capitalize">{meaning.partOfSpeech}</CardTitle>
        <CardContent className="p-0 space-y-4">
          {meaning.definitions.map((definition, index) => (
            <div key={index} className="group relative">
              <div className="flex items-start gap-2">
                <span className="definition-badge shrink-0 mt-1">
                  {index + 1}
                </span>
                <div className="flex-1 space-y-1">
                  <p className="text-foreground leading-relaxed">
                    {definition.definition}
                  </p>
                  {definition.example && (
                    <p className="text-muted-foreground italic text-sm pl-4 border-l-2 border-muted">
                      "{definition.example}"
                    </p>
                  )}
                </div>
                <CopyButton text={definition.definition} label="Copy definition" />
              </div>
            </div>
          ))}
        </CardContent>
        {meaning.synonyms && meaning.synonyms.length > 0 && (
          <div className="pt-4 border-t">
            <p className="text-sm font-semibold mb-2">Synonyms:</p>
            <div className="flex flex-wrap gap-2">
              {meaning.synonyms.map((synonym, index) => (
                <span key={index} className="synonym-chip">
                  {synonym}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardHeader>
    </Card>
  );
};
