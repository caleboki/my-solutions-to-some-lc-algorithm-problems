// https://leetcode.com/problems/basic-calculator-ii

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s || s.length === 0) return 0
    
    let stack = [], currentNum = 0, operation = '+'
    
    for (let i = 0; i < s.length; i++) {
        //check if current string is a number
        if (!isNaN(s[i])) currentNum = (currentNum * 10) + Number(s[i]) 
        
        if (isNaN(s[i]) && s[i] !== ' ' || i === s.length - 1 ) {
            
            if (operation === '-') {
                stack.push(-currentNum)
            } else if (operation === '+') {
                stack.push(currentNum)
            } else if (operation === '*') {
                stack.push(stack.pop() * currentNum)
            } else if (operation === '/') {
             
                console.log(stack)
                console.log(currentNum)
                stack.push(Math.trunc(stack.pop() / currentNum))
                
            }
            operation = s[i]
            currentNum = 0
        }
        
    }
    let result = 0
    while (stack.length) {
        result += stack.pop()
    }
    
    return result
    
};