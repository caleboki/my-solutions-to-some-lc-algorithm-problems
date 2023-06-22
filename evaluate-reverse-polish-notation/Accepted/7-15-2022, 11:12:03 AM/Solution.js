// https://leetcode.com/problems/evaluate-reverse-polish-notation

/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens) {
    let stack = [], total, a, b
    
    
    for (let t of tokens) {
        if (!isNaN(t)) {
            stack.push(+t)
        } else {
            b = +stack.pop()
            a = +stack.pop()
            
            if (t === '+') total = a + b
            if (t === '-') total = a - b
            if (t === '*') total = a * b
            if (t === '/') total = Math.trunc(a / b)
            
            stack.push(total)
        }
        
    }
    
    return stack[0]
};