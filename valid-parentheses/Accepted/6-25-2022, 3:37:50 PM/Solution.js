// https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 != 0) return false;
    
    let stack = [];
    
    for (let i in s) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else if (s[i] == ')' && stack.length > 0 && stack[stack.length - 1] == '(') {
            stack.pop();
        }
        
        else if (s[i] == ']' && stack.length > 0 && stack[stack.length - 1] == '[') {
            stack.pop();
        }
        
        else if (s[i] == '}' && stack.length > 0 && stack[stack.length - 1] == '{') {
            stack.pop();
        }
        else {
            return false;
        }
    }
    
    if (stack.length > 0) return false;
    return true;
};