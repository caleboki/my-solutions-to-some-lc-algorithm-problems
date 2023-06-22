// https://leetcode.com/problems/valid-parenthesis-string

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let stack = [], scount = 0
    
    for (let i in s) {
        if (s[i] === '(') {
            stack.push(s[i])
        } else {
            if (s[i] === ')' && stack.length) {
                stack.pop()
            } else if (s[i] === ')' && scount > 0) {
                scount--
            } else if (s[i] === ')') {
                return false
            } else {
                scount++
                if (stack.length) {
                    stack.pop()
                    scount++
                }
            }
        }
        
    }
    return stack.length === 0
};