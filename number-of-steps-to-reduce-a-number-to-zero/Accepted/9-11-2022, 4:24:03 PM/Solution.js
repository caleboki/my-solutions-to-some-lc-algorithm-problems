// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    
    let reduce = (num) => {
        if (num === 0) return
        
        if (num % 2 === 0) {
            reduce(num/2)
        } else {
            reduce(num - 1)
        }
        
        steps++
    }
    
    reduce(num)
    
    return steps
    
};