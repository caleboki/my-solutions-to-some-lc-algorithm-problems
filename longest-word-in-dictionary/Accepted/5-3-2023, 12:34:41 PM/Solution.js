// https://leetcode.com/problems/longest-word-in-dictionary

/**
 * @param {string[]} words
 * @return {string}
 */
function longestWord(words) {
  // Sort the words array lexicographically
  words.sort();

  // Create a set to store valid words
  const validWords = new Set();
  let longest = '';

  // Iterate through the words array
  for (const word of words) {
    // Check if the prefix is in the valid words set or the word has only one character
    const prefix = word.slice(0, -1);
    if (validWords.has(prefix) || prefix.length === 0) {
      validWords.add(word);

      // Update the longest word if the current word is longer
      if (word.length > longest.length) {
        longest = word;
      }
    }
  }

  return longest;
}
