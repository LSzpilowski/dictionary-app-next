import React from "react";
import * as S from "./Meanings.styles";

export const Meanings = (props) => {
  const { meaning } = props;

  return (
    <S.Meaning>
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => (
        <div key={index}>
          <p>
            {index + 1}. {definition.definition}
            {definition.example && (
              <S.DefinitionExample>
                <br />
                e.g.: {definition.example}
              </S.DefinitionExample>
            )}
          </p>
        </div>
      ))}

      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <>
          <strong>Synonyms: </strong>
          {meaning.synonyms.map((synonym, index) => (
            <span key={index}>{synonym}, </span>
          ))}
        </>
      )}
    </S.Meaning>
  );
};
