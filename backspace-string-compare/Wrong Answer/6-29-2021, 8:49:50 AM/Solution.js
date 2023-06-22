// https://leetcode.com/problems/backspace-string-compare

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    s = s.split(''), t = t.split('')
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '#') s.splice(i-1, 2)
        
    }
    
    for (let j = 1; j < t.length; j++) {
        if (t[j] === '#') t.splice(j-1, 2)
    }
    
    
    if (t.join('') === s.join('')) return true
    return false
    
};