// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if (x.length >= 1000) return 0
    
    x = Array.from(x.toString())
    
    if (x[0] === '-') {
        let neg = x.shift()
        x.reverse().unshift(neg)
        return +x.join('')
    }
    
    return +x.reverse().join('')
    
    
};