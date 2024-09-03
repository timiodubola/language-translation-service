const isWord = require('is-word');
const SpellChecker = require('spellchecker');

const englishWords = isWord('american-english');
const CHUNK_SIZE = 10; // Define chunk size as a constant

export function filterAndChunkWords(words: string[]): string[][] {
    
  const filteredWords = words.filter(word =>
    !SpellChecker.isMisspelled(word) && englishWords.check(word.toLowerCase())
  );

  const uniqueWords = [...new Set(filteredWords)];
  const chunks = [];

  for (let i = 0; i < uniqueWords.length; i += CHUNK_SIZE) {
    chunks.push(uniqueWords.slice(i, i + CHUNK_SIZE));
  }

  return chunks;
}
