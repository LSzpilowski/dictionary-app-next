import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Phonetics = (props) => {
  function playAudio(event) {
    event.preventDefault();
    let snd = new Audio(`${props.phonetic.audio}`);
    snd.play();
  }

  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="flex flex-row justify-left items-center gap-5 border-hidden">
        <Card className="border-hidden">
          <Button onClick={playAudio}>Listen</Button>
        </Card>
        {""}
        <div className="opacity-80 font-extrabold border-hidden">{props.phonetic.text}</div>
      </div>
    );
  }
};
