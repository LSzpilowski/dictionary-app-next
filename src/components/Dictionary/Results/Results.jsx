import React from "react";
import * as S from "./Results.styles.js";
import { Meanings } from "../Meanings/Meanings.jsx";
import { ExampleResults} from "./ExampleResults";
import { Phonetics } from "../Phonetics/Phonetics.jsx";

export const Results = (props) => {
  if (props.results) {
    return (
      <div className="Results">
        <S.DisplayWord>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </S.DisplayWord>
        <S.DisplayMeaning>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings meaning={meaning} />
              </div>
            );
          })}
        </S.DisplayMeaning>
      </div>
    );
  } else {
    return <ExampleResults />;
  }
};
