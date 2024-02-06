import React from "react";
import * as S from "./Phonetics.styles";

export const Phonetics = (props) => {
  function playAudio(event) {
    event.preventDefault();
    let snd = new Audio(`${props.phonetic.audio}`);
    snd.play();
  }

  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div>
        <span>
          <S.PronounceButton onClick={playAudio}>Listen</S.PronounceButton>
        </span>
        {""}
        <S.PronounceText>{props.phonetic.text}</S.PronounceText>
      </div>
    );
  }
};
