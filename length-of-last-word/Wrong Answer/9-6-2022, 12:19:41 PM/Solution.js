// https://leetcode.com/problems/length-of-last-word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = 0, j = i + 1, wordLen = 0
    
    while (i < j && j < s.length) {
        if (s[j] === ' ') {
            wordLen = j - i
            i++
            j++
        } else {
           j++ 
        }
        
    }
    
    return wordLen
};