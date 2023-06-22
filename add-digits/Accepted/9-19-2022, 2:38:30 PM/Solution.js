// https://leetcode.com/problems/add-digits

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let res = 0
    num = num.toString()
    
    while (num.length > 1) {
        let sum = 0
        for (let i = 0; i < num.length; i++) {
            sum += +num[i]
        }
        num = sum.toString()
    }
    
    return num
};