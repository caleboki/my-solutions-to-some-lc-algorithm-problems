// https://leetcode.com/problems/merge-strings-alternately

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = []
    
    for (let i = 0; i < word1.length; i++) {
        result.push(word1[i], word2[i])
    }
    
    result = result.join('')
    
    if (word2.substring(word1.length, word2.length).length > 0) result += word2.substring(word1.length, word2.length)
    
    return result
    
};