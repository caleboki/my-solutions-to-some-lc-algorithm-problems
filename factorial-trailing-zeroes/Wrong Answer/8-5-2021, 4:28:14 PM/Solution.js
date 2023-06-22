// https://leetcode.com/problems/factorial-trailing-zeroes

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result
    let zeroes = 0
    
    const fact = (n) => {
        if (n <= 1) return 1
        return n * fact(n-1)
    }
    result = fact(n)
    result = Array.from(String(result), Number)
    
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] === 0) {
            zeroes++
        } else {
            break
        }
        
    }
    return zeroes
    
    
};