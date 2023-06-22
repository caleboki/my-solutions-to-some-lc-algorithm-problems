// https://leetcode.com/problems/counting-words-with-a-given-prefix

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0, n = pref.length
    
    for (let word of words) {
        if (word.substring(0, n) === pref) count++
    }
    
    return count
    
};