// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let indexesToRemove = new Set()
    let stack = [] //for a valid string stack must end up empty
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
    
    //Going thru stack and recording bad indexes
    while (stack.length !== 0) {
        indexesToRemove.add(stack.pop())
    }
    
    //Rebuilding string
    for (let i = 0; i < s.length; i++) {
        if (!indexesToRemove.has(i)) result.push(s[i])
    }
    
    return result.join("")
};