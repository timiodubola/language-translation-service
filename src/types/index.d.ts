export interface TranslateRequestBody {
    words: string[];
    targetLanguage: string;
  }
  
  export interface TranslatedWord {
    originalWord: string;
    translatedWord: string;
  }
  
  export interface TranslateResponseBody {
    words: TranslatedWord[];
    targetLanguage: string;
  }
  
  declare module 'is-word' {
    function isWord(language: string): {
      check: (word: string) => boolean;
    };
    export default isWord;
  }