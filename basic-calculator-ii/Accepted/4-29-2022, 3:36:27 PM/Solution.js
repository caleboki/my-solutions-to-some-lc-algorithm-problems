// https://leetcode.com/problems/basic-calculator-ii

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let operation = '+', currentNum = 0, stack = []
    
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === " ") continue
        //check if current string is a number
        if (!isNaN(s[i])) {
            currentNum = currentNum * 10 + (+s[i]) 
        } else {
            if (operation === '+') {
                stack.push(currentNum)
            } else if (operation === "-") {
                stack.push(-currentNum)
            } else if (operation === "*") {
                let num = stack.pop()
                stack.push(num * currentNum)
            } else if (operation === "/") {
                let num = stack.pop()
                stack.push(Math.trunc(num / currentNum))
            }
            currentNum = 0
            operation = s[i]
        }
    }
    return stack.reduce((a, b) => a+b)
};
//TEST: "3+2*2"
//i = 0, stack = [], current = 3, operation = '+', 
//i = 1, stack = [3], current = 0, operation = '+'
//i = 2, stack = [3], current = 2, operation = '+'
//i = 3, stack = [3, 2], current = 0, operation = '*'
//i = 4, stack = [3, 2], current = 2, operation = '*'
//i = 5, stack = [3, 2*2] = [3, 4], current = 0, operation = undefined


// var calculate = function(s) {
//     let operation = "+", currentNum = 0, lastNum = 0, result = 0
    
//     for (let i = 0; i <= s.length; i++) {
//         if (s[i] === ' ') continue
        
//         if (!isNaN(s[i])) {
//             currentNum = currentNum * 10 + (+s[i])
//         } else {
//             if (operation === '+' || operation === '-') {
//                 result += lastNum
//                 lastNum = (operation === '+') ? currentNum : -currentNum
//             }
            
//             if (operation === '*') {
//                 lastNum = lastNum * currentNum
//             }
            
//             if (operation === '/') {
//                 lastNum = Math.trunc(lastNum / currentNum)
//             }
            
//             operation = s[i]
//             currentNum = 0
//         }
//     }
    
//     result += lastNum
//     return result
// };