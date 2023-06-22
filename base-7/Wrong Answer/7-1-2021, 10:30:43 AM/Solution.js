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
    
    let result = []
    while (num !== 0) {
        result.push(num % 7)
        num = parseInt(num/7)
        
    }
    return result.join('')
  
    
};