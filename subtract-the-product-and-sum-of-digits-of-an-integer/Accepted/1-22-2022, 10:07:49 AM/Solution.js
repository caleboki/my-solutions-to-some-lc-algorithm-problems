// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString()
    let digits = []
    
    for (d of n) {
        digits.push(+d)
    }
    
    let product = 1
    for (d of digits) {
        product = product * d
    }
    
    let sum = digits.reduce((a, b) => a+b, 0)
    
    return product-sum
    
};