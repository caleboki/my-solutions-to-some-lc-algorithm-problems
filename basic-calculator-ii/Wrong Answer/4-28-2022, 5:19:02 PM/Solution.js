// https://leetcode.com/problems/basic-calculator-ii

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s || s === '') return 0
    
    let cs = ''
    
    for ( let n of s) {
        if (n !== ' ') cs += n
    }
    
    let stack = [], currentNum = 0, operation = '+'
    
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) currentNum = (currentNum * 10) + (+s[i]) 
        
        if (isNaN(s[i]) && s[i] !== ' ' || i === s.length - 1 ) {
            
            if (operation === '-') {
                stack.push(-currentNum)
            } else if (operation === '+') {
                stack.push(currentNum)
            } else if (operation === '*') {
                stack.push(stack.pop() * currentNum)
            } else if (operation === '/') {
                stack.push(Math.floor(stack.pop() / currentNum))
            }
            operation = s[i]
            currentNum = 0
        }
        
    }
    let result = 0
    while (stack.length > 0) {
        result += stack.pop()
    }
    
    return result
    
};