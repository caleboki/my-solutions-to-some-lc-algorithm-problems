// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let indexesToRemove = new Set()
    let stack = []
    let result = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else if (s[i] === ')'){
            if (stack.length === 0) {
                indexesToRemove.add(i)
            } else {
                stack.pop()
            }
            
        }
    }
    
    while (stack.length !== 0) {
        indexesToRemove.add(stack.pop())
    }
    
    for (let i = 0; i < s.length; i++) {
        if (!indexesToRemove.has(i)) result.push(s[i])
    }
    
    return result.join("")
    
    
    
};