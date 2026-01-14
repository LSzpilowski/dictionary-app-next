import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import type { IPhoneticsProps } from "@/types";

export const Phonetics: React.FC<IPhoneticsProps> = ({phonetic}) => {
  function playAudio(event : React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const snd = new Audio(phonetic.audio);
    snd.play();
  }

  if (phonetic.audio && phonetic.text) {
    return (
      <div className="flex flex-row items-center gap-3 border-hidden">
        <Button 
          onClick={playAudio}
          aria-label={`Listen to pronunciation ${phonetic.text}`}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Volume2 className="h-4 w-4" />
          <span className="hidden sm:inline">Listen</span>
        </Button>
        <div className="text-muted-foreground font-semibold text-lg" aria-label="Phonetic spelling">
          {phonetic.text}
        </div>
      </div>
    );
  } else return null;
};
