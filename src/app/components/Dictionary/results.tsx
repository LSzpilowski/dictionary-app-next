import React from "react";
import { Meanings } from "./meanings";
import { ExampleResults} from "./exampleResults";
import { Phonetics } from "./phonetics";
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";

export const Results = (props) => {
  if (props.results) {
    return (
      <Card className="flex flex-col gap-5 border-hidden">
        <Card className="hover:bg-secondary">
          <CardHeader>
            <CardTitle>{props.results.word}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
          </CardContent>
        </Card>
        <Card className="border-hidden">
          {props.results.meanings.map(function (meaning, index) {
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
