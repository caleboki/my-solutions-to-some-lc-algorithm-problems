// https://leetcode.com/problems/unique-morse-code-words

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse =  [".-","-...","-.-.","-..",".","..-.","--.",
                 "....","..",".---","-.-",".-..","--","-.",
                 "---",".--.","--.-",".-.","...","-","..-",
                 "...-",".--","-..-","-.--","--.."]

    const seen = new Set()
    for (let word of words) {
        let code = ''
        for (let c of word) {
            code += morse[c.charCodeAt(0) - 97]
        }
        seen.add(String(code))
    }

    return seen.size
    
};