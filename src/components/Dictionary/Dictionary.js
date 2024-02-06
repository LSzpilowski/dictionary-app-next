import React, {useState} from "react";
import axios from "axios";
import Results from "../Results/Results";
import Photos from "../Photos/Photos";
import "./Dictionary.css";
// import { createClient } from 'pexels';

export default function Dictionary () {

let [keyWord, setKeyWord] = useState("");
let [results, setResults] = useState();
let [photos, setPhotos] = useState(null);


function handleDictionaryResponse (response) {
setResults(response.data[0]);
}

function getPhotos(data) {
// photos.map(photo => {

setPhotos(data.photos);
// })
}


function search (event) {
  event.preventDefault();

  // documentation: https://dictionaryapi.dev
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
  axios.get(apiUrl).then(handleDictionaryResponse);


// documentation: https://www.pexels.com/api/documentation/?language=javascript#photos-search
// website which help me out with fetch API authorization: https://medium.com/star-gazers/how-to-work-pexels-api-with-javascript-9cda16bbece9
  fetch(`https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`,{
  headers: {
    Authorization: "U70ZTYYUBbC0tHRpP4TJF8374KVThjwUHC1S4FvsmTeKDlH0FTbpfhnC"
  }
})
  .then(resp => {
    return resp.json()
  })
  .then(data => {
    getPhotos(data);
  })
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
      <p className="suggest">Type any* word in English e.g.: health, active, hard-working (*except proper nouns)</p>
      </div>
      <div className="resultsBox">
      <Results results={results}/>
      <Photos photos={photos} />
      </div>
    </div>
  )
}