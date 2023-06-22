// https://leetcode.com/problems/shortest-word-distance

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let word1p
    let word2p
    let result = []
    
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) word1p = i
        if (wordsDict[i] === word2) word2p = i
        
        if ((word1p !== undefined) && (word2p !== undefined)) result.push(Math.abs(word1p - word2p))
       
    }
    return Math.min(...result)
    
};