// https://leetcode.com/problems/word-break

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let wordDictToString = '';
    
    for (let i = 0; i < wordDict.length; i++) {
        wordDictToString += wordDict[i];
    }
    
    if (!wordDictToString.includes(s) && !s.includes(wordDictToString)) return false;
    return true;
};