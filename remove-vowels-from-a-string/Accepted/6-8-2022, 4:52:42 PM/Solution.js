// https://leetcode.com/problems/remove-vowels-from-a-string

/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let vowels = new Set(['a','e','i','o','u'])
    
    s = s.split('')
   
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            s.splice(i, 1)
            i-- 
        }
    }
    
    return s.join('')
}
    