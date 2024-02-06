import React from "react";
import * as S from "./ExampleResults.styles";
import { PronounceButton } from '../../Phonetics/Phonetics.styles';
import { DisplayMeaning } from "../Results.styles";
import { DisplayWord } from "../Results.styles";

export const ExampleResults = () => {
  return (
    <div className="resultsBox">
      <div className="Results">
        <DisplayWord>
          <h2>example</h2>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <div>
              <span>
                <PronounceButton>Listen</PronounceButton>
              </span>
              <span>/əɡˈzæmpl̩/</span>
            </div>
          </div>
        </DisplayWord>
        <DisplayMeaning>
          <div>
            <S.Meaning>
              <h3> noun</h3>
              <div>
                <p>
                  {" "}
                  1. Something that is representative of all such things in a
                  group.
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  2. Something that serves to illustrate or explain a rule.
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  3. Something that serves as a pattern of behaviour to be
                  imitated (a good example) or not to be imitated (a bad
                  example).
                </p>
              </div>
              <div>
                <p> 4. A person punished as a warning to others.</p>
              </div>
              <div>
                <p>
                  {" "}
                  5. A parallel or closely similar case, especially when serving
                  as a precedent or model.
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  6. An instance (as a problem to be solved) serving to
                  illustrate the rule or precept or to act as an exercise in the
                  application of the rule.
                </p>
              </div>
            </S.Meaning>
          </div>
          <div>
            <S.Meaning>
              <h3> verb</h3>
              <div>
                <p> 1. To be illustrated or exemplified (by).</p>
              </div>
            </S.Meaning>
          </div>
        </DisplayMeaning>
      </div>
    </div>
  );
};
