// https://leetcode.com/problems/length-of-last-word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = 0, wordLen = 0
    
    while (i < s.length) {
        if (s[i] === ' ') {
            wordLen = Math.max(wordLen, i)
        }
        i++
    }
    
    return wordLen
};