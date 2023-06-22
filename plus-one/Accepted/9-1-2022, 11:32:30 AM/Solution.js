// https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // digits = +digits.join('') 
    // console.log(digits)
    // //return digits.toString().split('')
    
    for (let i = digits.length - 1; i >= 0; i--) {
        let last = digits[i]
        
        if (last === 9) {
            last = 0
            digits[i] = last
        } else {
            digits[i]++
            return digits
        }
    }
    digits.unshift(1)
    return digits
};