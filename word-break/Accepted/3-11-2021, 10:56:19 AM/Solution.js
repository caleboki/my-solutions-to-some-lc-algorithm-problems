// https://leetcode.com/problems/word-break

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, memo={}) {
    if (s in memo) return memo[s];
    if (s === '') return true;

    for (let word of wordDict) {
        //check if some substring is a prefix of another string
        if (s.indexOf(word) === 0) {
          //get everything after the prefix
          const suffix = s.slice(word.length) //word.length is the length of the prefix
          if (wordBreak(suffix, wordDict, memo) === true) {
            memo[s] = true;
            return true
          };
        }
    }
    memo[s] = false;
    return false;
};