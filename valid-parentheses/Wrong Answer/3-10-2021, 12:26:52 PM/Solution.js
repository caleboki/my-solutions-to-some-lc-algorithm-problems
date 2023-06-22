// https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let left = 0;
    let right = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        //if (i == 0 && s[0] == ')') return false;
        
        
        if (s[i] == '(') left++;
        if (s[i] == ')') left--;
        if (s[i] == '{') left++;
        if (s[i] == '}') left--;
        if (s[i] == '[') left++;
        if (s[i] == ']') left--;
        // console.log('left ' + left)
        // console.log('right ' + right)
        
        if (left == 0) {
            return true;
        }
    }
    
};