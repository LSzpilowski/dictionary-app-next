"use client"

import React, { useState } from "react";
import axios from "axios";
import { Results } from "./Dictionary/results";
import { Photos } from "./Dictionary/photos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const Dictionary = () => {
  let [keyWord, setKeyWord] = useState<string>("");
  let [results, setResults] = useState<string[]>();
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function getPhotos(data) {
    setPhotos(data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // documentation: https://www.pexels.com/api/documentation/?language=javascript#photos-search
    // website which help me out with fetch API authorization: https://medium.com/star-gazers/how-to-work-pexels-api-with-javascript-9cda16bbece9
    fetch(`https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`, {
      headers: {
        Authorization:
          "U70ZTYYUBbC0tHRpP4TJF8374KVThjwUHC1S4FvsmTeKDlH0FTbpfhnC",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        getPhotos(data);
      });
  }

  function changeSearch(event) {
    setKeyWord(event.target.value);
  }

  return (
    <Card className="mt-10 w-3/5 ">
      <Card className="border-none p-5">
        <CardHeader>
        <CardTitle>What word would you like to check?</CardTitle>
        </CardHeader>
        <CardContent >
        <form onSubmit={search} >
          <Input onChange={changeSearch} className="hover:bg-secondary mb-1"/>
        </form>
        <p className="opacity-80 text-sm">
          Type any* word in English e.g.: health, active, hard-working (*except
          proper nouns)
        </p>
        </CardContent>
      <CardContent className="pb-0">
        <Results results={results} />
        <Photos photos={photos} />
      </CardContent>
      </Card>
    </Card>
  );
};
