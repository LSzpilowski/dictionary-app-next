import React from "react";
import "./Results.css";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Results (props) {

  if (props.results) {
  return (
    <div className="Results">
      <div className="displayWord">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        
      </div>
    <div className="displayMeaning">
      {props.results.meanings.map(function (meaning, index) {
      return (
        <div key={index}>
        <Meaning meaning={meaning} />
        </div>
      );
      })}
      </div>
    </div>
  );
} else {
  return (
    <div class="resultsBox">
      <div class="Results">
        <div class="displayWord">
          <h2>example</h2>
          <div></div>
          <div></div><
            div></div>
            <div><div>
              <span>
                <button class="pronounceButton">Listen</button>
                </span><span>/əɡˈzæmpl̩/</span></div>
                </div></div>
                <div class="displayMeaning">
                  <div><div class="Meaning">
                <h3> noun</h3> 
                <div><p> 1. Something that is representative of all such things in a group.</p>
                </div><div>
                  <p> 2. Something that serves to illustrate or explain a rule.</p>
                  </div><div>
                    <p> 3. Something that serves as a pattern of behaviour to be imitated (a good example) or not to be imitated (a bad example).</p>
                    </div><div>
                      <p> 4. A person punished as a warning to others.</p>
                      </div><div><p> 5. A parallel or closely similar case, especially when serving as a precedent or model.</p>
                      </div><div>
                        <p> 6. An instance (as a problem to be solved) serving to illustrate the rule or precept or to act as an exercise in the application of the rule.</p>
                        </div>
                        </div></div>
                        <div><div class="Meaning"> 
                        <h3> verb</h3> 
                        <div><p> 1. To be illustrated or exemplified (by).</p>
                        </div>
                        </div></div></div></div></div>
  )
}
}