// https://leetcode.com/problems/remove-invalid-parentheses

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    if (!s || s.length === 0) return ['']
    
    let queue = [s]
    let visited = new Set()
    let result = []
    
    visited.add(s)
    
    let validFound = false
    
    while (queue.length > 0) {
        let expression = queue.shift()
        
        if (isValid(expression)) {
            result.push(expression)
            validFound = true
        }
        
        if (validFound) continue
        
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] !== '(' && expression[i] !== ')') {
                // If expression's i-th character is anything but one of ( or ), continue
                continue;
            }
            
            let next = expression.substring(0, i) + expression.substring(i + 1)
            if (!visited.has(next)) {
                visited.add(next)
                queue.push(next)
            }
        }
    }
    return result
    

    
    
};


function isValid(str) {
    let stack = []
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i])
        } else if (str[i] === ')') {
            if (stack.length === 0) return false
            stack.pop()
        }
    }
    return (stack.length === 0)
}