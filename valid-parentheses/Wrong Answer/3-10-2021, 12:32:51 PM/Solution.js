// https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracket = 0;
    let curlyBracket = 0;
    let squareBracket = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        //if (i == 0 && s[0] == ')') return false;
        
        
        if (s[i] == '(') bracket++;
        if (s[i] == ')') bracket--;
        if (s[i] == '{') curlyBracket++;
        if (s[i] == '}') curlyBracket--;
        if (s[i] == '[') squareBracket++;
        if (s[i] == ']') squareBracket--;
        // console.log('left ' + left)
        // console.log('right ' + right)
        
    }
    if (bracket == 0) return true;
    if (curlyBracket == 0) return true;
    if (squareBracket == 0) return true;
    
    return false;
    
};