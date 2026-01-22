import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/CopyButton";
import type { IMeaningsProps } from "@/types";

export const Meanings: React.FC<IMeaningsProps> = ({ meaning }) => {
  return (
    <Card className="transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
      <CardHeader className="gap-5">
        <CardTitle className="text-xl capitalize">{meaning.partOfSpeech}</CardTitle>
        <CardContent className="p-0 space-y-4">
          {meaning.definitions.map((definition, index) => (
            <div key={index} className="group relative">
              <div className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary shrink-0 mt-1">
                  {index + 1}
                </span>
                <div className="flex-1 space-y-1">
                  <p className="text-foreground leading-relaxed">
                    {definition.definition}
                  </p>
                  {definition.example && (
                    <p className="text-muted-foreground italic text-sm pl-4 border-l-2 border-muted">
                      &ldquo;{definition.example}&rdquo;
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
                <span key={index} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm transition-colors hover:bg-primary/10">
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
