// https://leetcode.com/problems/count-operations-to-obtain-zero

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let steps = 0
    
    let reduce = (num1, num2) => {
        if (num1 === 0 || num2 === 0) return
        
        if (num1 > num2) {
            reduce(num1 - num2, num2)
        } else {
            reduce(num1, num2 - num1)
        }
        
        steps++
    }
    
    reduce(num1, num2)
    return steps
    
};