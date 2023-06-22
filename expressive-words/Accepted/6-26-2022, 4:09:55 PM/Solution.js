// https://leetcode.com/problems/expressive-words

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    if (s === null || words === null) return 0
    
    let count = 0
    
    const getRepeatedLength = (str, i) => {
        let j = i
        
        while (j < str.length && str[j] === str[i]) {
            j++
        }
        
        return j - i
    }
    
    const stretchy = (s, word) => {
        if (word === null) return false
     
        let i = 0, j = 0
        
        while (i < s.length && j < word.length) {
            if (s[i] === word[j]) {
                let len1 = getRepeatedLength(s, i)
                let len2 = getRepeatedLength(word, j)
                
                if (len1 < 3 && len1 !== len2 || len1 >= 3 && len1 < len2) return false
                
                i += len1
                j += len2
                
            } else {
                return false
            }
        }

        return i === s.length && j === word.length
    }
    
    for (let word of words) {
        if (stretchy (s, word)) count++
    }
    
    return count
};