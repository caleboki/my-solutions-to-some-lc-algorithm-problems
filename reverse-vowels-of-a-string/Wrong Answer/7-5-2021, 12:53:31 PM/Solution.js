// https://leetcode.com/problems/reverse-vowels-of-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    s = s.split('')
    let j = s.length
    
    for (let i = 0; i < j; i++) {
        if (vowels.includes(s[i]) && vowels.includes(s[j - 1])) {
            [s[i], s[j - 1]] = [s[j - 1], s[i]]
            j--
            continue
        }
        
    }
    
    return s.join('')
};