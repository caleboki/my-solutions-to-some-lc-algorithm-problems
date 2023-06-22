// https://leetcode.com/problems/evaluate-reverse-polish-notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
// var evalRPN = function(tokens) {
//     let stack = []
    
//     for (t of tokens) {
//         if (!isNaN(t)) {
//             stack.push(+t)
//         } else {
//             let y = stack.pop()
//             let x = stack.pop()
            
//             if (t === '+') {
//                 stack.push(x+y)
//             }
//             if (t === '-') {
//                 stack.push(x-y)
//             }
            
//             if (t === '*') {
//                 stack.push(x*y)
//             }
            
//             if (t === '/') {
//                 Math.trunc(stack.push(x/y))
//             }
//         }
//     }
    
//     return (stack[0])
// };

var evalRPN = function(tokens) {
    let stack = []
    let total, a, b
    
    
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