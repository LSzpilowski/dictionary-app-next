import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface IPhonetic {
  text: string;
  audio: string;
}

interface IPhoneticsProps {
phonetic: IPhonetic
}

export const Phonetics: React.FC<IPhoneticsProps> = ({phonetic}) => {
  function playAudio(event : React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    let snd = new Audio(phonetic.audio);
    snd.play();
  }

  if (phonetic.audio && phonetic.text) {
    return (
      <div className="flex flex-row justify-left items-center gap-5 border-hidden">
        <Card className="border-hidden">
          <Button onClick={playAudio}>Listen</Button>
        </Card>
        {""}
        <div className="opacity-80 font-extrabold border-hidden">{phonetic.text}</div>
      </div>
    );
  } else null;
};
