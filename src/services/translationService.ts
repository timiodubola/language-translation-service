import axios from 'axios';
import { TranslateRequestBody, TranslatedWord } from '../types';
import { filterAndChunkWords } from '../utils/wordFilter';

const TRANSLATION_SERVICE_URL = "http://127.0.0.1:5000/translate";

async function translateBatch(chunk: string[], targetLanguage: string): Promise<TranslatedWord[]> {
  const requestPayload = {
    q: chunk,
    source: "auto",
    target: targetLanguage,
    format: "text",
    api_key: "" // Provide your API key if needed
  };

  const response = await axios.post(TRANSLATION_SERVICE_URL, requestPayload, {
    headers: { "Content-Type": "application/json" },
    timeout: 30000
  });

  const translatedTexts: string[] = response.data.translatedText;

  return chunk.map((word, index) => ({
    originalWord: word,
    translatedWord: translatedTexts[index]
  }));
}

export async function translateWordsInBatch(words: string[], targetLanguage: string): Promise<TranslatedWord[]> {
  try {
    const chunks = filterAndChunkWords(words);

    const translatedWords = await Promise.all(
      chunks.map(chunk => translateBatch(chunk, targetLanguage))
    );

    return translatedWords.flat();
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
}
