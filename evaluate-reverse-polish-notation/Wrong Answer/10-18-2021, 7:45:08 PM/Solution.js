// https://leetcode.com/problems/evaluate-reverse-polish-notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    
    for (t of tokens) {
        if (!isNaN(t)) {
            stack.push(+t)
        } else {
            let y = stack.pop()
            let x = stack.pop()
            
            if (t === '+') {
                stack.push(y+x)
            }
            if (t === '-') {
                stack.push(y-x)
            }
            
            if (t === '*') {
                stack.push(y*x)
            }
            
            if (t === '/') {
                stack.push(y/x)
            }
        }
    }
    return (stack[0])
};