// https://leetcode.com/problems/replace-words

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let rootset = new Set()
    let ans = ''
    
    for (root of dictionary) {
        rootset.add(root)
    }
    
    sentence = sentence.split(' ')
   
    for (word of sentence) {
        let prefix = ''
        
        for (let i = 1; i <= sentence.length; i++) {
            prefix = word.substring(0, i)
            if (rootset.has(prefix)) break
        }
        
        if (ans.length > 0) ans = ans + ' '
        ans = ans + prefix
    }
    return ans
   
    
};