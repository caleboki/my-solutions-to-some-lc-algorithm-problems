// https://leetcode.com/problems/basic-calculator-ii

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
    let operation = "+", currentNum = 0, stack = []
    
    for (let i = 0; i <= s.length; i++) {
        let char = s[i]
        if (char === " ") continue
        //check if current string is a number
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char) 
        } else {
            if (operation === "+") {
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
            operation = char
            
            
        }
        
    }
    
    
    return stack.reduce((a, b) => a+b)
};