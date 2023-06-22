// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = [], count = 0
    
    for (let i of s) {
        if (i === '(') {
            stack.push(i)
        } else if (i === ')' && stack.length > 0 && stack[stack.length - 1] === '(') {
            stack.pop()
            count++
        }
    }
    if (stack.length > 0) {
        
    }
    return count + stack.length
};