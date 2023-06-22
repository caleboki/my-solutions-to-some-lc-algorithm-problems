// https://leetcode.com/problems/verifying-an-alien-dictionary

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = {}
    let result = []
    
    for (let i = 0; i < order.length; i++) {
        map[order[i].charCodeAt(0) - 97] = i
    }
    
    for (let i = 1; i < words.length; i++) {
        if (compare(map, words[i - 1], words[i]) > 0) return false
    }
    
    return true
    
    //console.log(map)
};

function compare(map, word1, word2) {
    let i = 0, j = 0, compareValue = 0
    
    while(i < word1.length && j < word2.length && compareValue === 0) {
        compareValue = map[word1.charCodeAt(0) - 97] - map[word2.charCodeAt(0) - 97]
        
        i++, j++
    }
    
    if (compareValue === 0) {
        return (word1.length - word2.length)
    } else {
        return compareValue
    }
        
    
}