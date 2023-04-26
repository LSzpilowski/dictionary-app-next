import React from "react";

export default function Phonetc (props) {
console.log(props);
function playAudio(event) {
event.preventDefault();
let snd = new Audio(`${props.phonetic.audio}`);
snd.play();
}

if (props.phonetic.audio && props.phonetic.text) {
return (
<div>
  <span><button className="pronounceButton" onClick={playAudio}>Listen</button>
  </span>
{""}
<span className="pronounceText">{props.phonetic.text}</span>
</div>
);
}
}