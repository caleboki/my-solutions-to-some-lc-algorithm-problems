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
        
        
        if (s[i] == '(') bracket++;
        if (s[i] == ')') bracket--;
        if (s[i] == '{') curlyBracket++;
        if (s[i] == '}') curlyBracket--;
        if (s[i] == '[') squareBracket++;
        if (s[i] == ']') squareBracket--;
    }
   
    if (bracket == 0 && curlyBracket == 0 && squareBracket == 0) return true;
    
    return false;
    
};