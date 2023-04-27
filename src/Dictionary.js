import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary () {

let [keyWord, setKeyWord] = useState("");
let [results, setResults] = useState();


function handleResponse (response) {
setResults(response.data[0]);
}

function search (event) {
  event.preventDefault();

  // documentation: https://dictionaryapi.dev
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
  axios.get(apiUrl).then(handleResponse);
}


function changeSearch(event) {
  setKeyWord(event.target.value)
}
  return (
    <div className="Dictionary">
      <div className="searchBox">
      <h5>What word do you want to check?</h5>
      <form  onSubmit={search}>
        <input className="searchWord" type="search" placeholder="type here..." onChange={changeSearch} />
      </form>
      <p className="suggest">Type any* word in English e.g.: health, active, hard-working (*except countries name)</p>
      </div>
      <div className="resultsBox">
      <Results results={results}/>
      </div>
    </div>
  )
}