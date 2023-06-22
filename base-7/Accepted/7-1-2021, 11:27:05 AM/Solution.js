// https://leetcode.com/problems/base-7

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
//     let numOfDigits = []
//     let current = 1
      
//     for (let i = 0; i<num; i++) {
//         current = current*2
//         if (current > num) break
//         numOfDigits.push(current)
//     }
    
//     numOfDigits.reverse()
//     console.log(numOfDigits)
    
    if (num === 0) return '0'
    let isPositive = true
    
    if (num < 0) {
        num = -1*num
        isPositive = !isPositive
    }
    
    let result = []
    while (num !== 0) {
        result.push(num % 7)
        num = parseInt(num/7)
        
    }
    result.reverse()
    result = parseInt(result.join(''))
    
    if (!isPositive) result = -1 * result
    
    result = result.toString()
    return result
};