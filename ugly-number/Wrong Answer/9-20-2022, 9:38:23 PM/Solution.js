// https://leetcode.com/problems/ugly-number

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n === 1) return true
    
    let count = 3, i = 2
    const isPrime = (n) => {}
    
    while (i < n + 1) {
        if (i === 7 && count === 3) return false
        
        if (n % i === 0) {
            n = n / i
            count--
        }
       
        i++
        
    }
    return true
    
};