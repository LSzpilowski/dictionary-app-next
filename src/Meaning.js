import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning.partOfSpeach);
  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <br />
      {props.meaning.definitions.map( function (definition, index) {
        if (definition.example) {
return (
          <div key={index}>
            <p>{index + (1)}.{" "}
            {definition.definition}{" "}
            <br />
            <em>e.g {definition.example}</em>
            </p>
          </div>
        );
        } else {
          return (
          <div key={index}>
            <p>{index + (1)}.{" "}
            {definition.definition}
            </p>
          </div>
        );
        }
        
      })}
    </div>
  );
}