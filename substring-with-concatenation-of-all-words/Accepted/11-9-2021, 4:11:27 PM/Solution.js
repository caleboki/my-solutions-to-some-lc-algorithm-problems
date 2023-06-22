// https://leetcode.com/problems/substring-with-concatenation-of-all-words

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0 || words[0].length === 0) {
        return [];
    }

    wordFrequency = {};

      words.forEach((word) => {
        if (!(word in wordFrequency)) {
          wordFrequency[word] = 0;
        }
        wordFrequency[word] += 1;
      });

  const resultIndices = [],
    wordsCount = words.length;
  wordLength = words[0].length;

  for (i = 0; i < (s.length - wordsCount * wordLength) + 1; i++) {
    const wordsSeen = {};
    for (j = 0; j < wordsCount; j++) {
      next_word_index = i + j * wordLength;
      // Get the next word from the string
      word = s.substring(next_word_index, next_word_index + wordLength);
      if (!(word in wordFrequency)) { // Break if we don't need this word
        break;
      }

      // Add the word to the 'wordsSeen' map
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;


      // no need to process further if the word has higher frequency than required
      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) { // Store index if we have found all the words
        resultIndices.push(i);
      }
    }
  }

  return resultIndices;
    
};