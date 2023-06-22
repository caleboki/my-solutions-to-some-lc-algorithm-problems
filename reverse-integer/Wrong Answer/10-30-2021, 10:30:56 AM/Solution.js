// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    
    if (x <= -(2**31) - 1) return 0
    
    
    x = Array.from(x.toString())
    if (x.length >= 9 ) return 0
    
    if (x[0] === '-') {
        let neg = x.shift()
        x.reverse().unshift(neg)
        return +x.join('')
    }
    
    return +x.reverse().join('')
    
    
};