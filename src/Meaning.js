
import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  

  return (<div className="Meaning" > <h3> {
      props.meaning.partOfSpeech
    }

    </h3> {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (<div key={index}> 
          <p> {index+(1)}. {" "}
          {definition.definition}{" "}
            <br /> 
            <em>e.g.: {definition.example} </em> 
          </p> 
        </div>
        );
      } else {
        return (<div key={index}> 
        <p> {index+(1)}.{" "}
          {definition.definition} 
        </p> 
      </div>);
      }
    })
    }
    <strong>Synonyms: </strong> 
      {props.meaning.synonyms.map(function (synonym, index) {
          if (synonym) {
            return (<span key= {
                index
              }

              > {
                synonym
              }

              , {
              " "
            }

            </span>)
        }

        else {
          return ("Not found");
        }
      })
  }

  </div>);
}