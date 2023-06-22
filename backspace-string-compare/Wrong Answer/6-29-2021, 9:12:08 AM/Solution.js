// https://leetcode.com/problems/backspace-string-compare

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    if (s === '' && t === '') return true
    
    let stackS = []
    let stackT = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#' && stackS.length > 0) {
            stackS.pop() 
        } else {
            stackS.push(s[i]) 
        } 
    }
    
    for (let j = 0; j < t.length; j++) {
        if (t[j] === '#' && stackT.length > 0) {
            stackT.pop() 
        } else {
            stackT.push(t[j]) 
        } 
    }
    
    if (stackT.length === 0 && stackS.length === 0) return true
    
    if (stackT.join('') === stackS.join('')) return true
    
    return false
    
    
    
    
    
};