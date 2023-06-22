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
    let result = []
    while (num !== 0) {
        result.push(num % 7)
        num = parseInt(num/7)
        
    }
    result.reverse()
    
    const allNegative = (n) => {
        if (n < 0) return true
    }
    
    const positive = (n) => {
        return -n  
    }
    
    if (result.every(allNegative) === true) {
      
        for (let i = 1; i < result.length; i++) {
            result[i] = positive(result[i])
        }
    }
    return result.join('')
  
    
};