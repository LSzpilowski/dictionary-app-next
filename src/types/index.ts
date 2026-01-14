export interface IDefinition {
  definition: string;
  example?: string;
}

export interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[];
  synonyms?: string[];
}

export interface IPhonetic {
  text: string;
  audio: string;
}

export interface IDictionaryResponse {
  word: string;
  phonetics: IPhonetic[];
  meanings: IMeaning[];
}

export interface IPhoto {
  original: string;
  landscape: string;
}

export interface IPhotoResponse {
  photos: Array<{ 
    src: { 
      original: string; 
      landscape: string;
    };
  }>;
}

export interface IResultsProps {
  results?: IDictionaryResponse | null;
  onSearch?: (word: string) => void;
}

export interface IPhotosProps {
  photos: IPhoto[] | null;
}

export interface IMeaningsProps {
  meaning: IMeaning;
}

export interface IPhoneticsProps {
  phonetic: IPhonetic;
}
