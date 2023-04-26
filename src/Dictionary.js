import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary () {

let [keyWord, setKeyWord] = useState("");


function handleResponse (response) {
  console.log(response.data[0]);
}


function search (event) {
  event.preventDefault();
  alert (`Searching for "${keyWord}" definition`);


  // documentation: https://dictionaryapi.dev
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
  axios.get(apiUrl).then(handleResponse);
}






function changeSearch(event) {
  setKeyWord(event.target.value)
}

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={changeSearch} />
      </form>
    </div>
  )
}