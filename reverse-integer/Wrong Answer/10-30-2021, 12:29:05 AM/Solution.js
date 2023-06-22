// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    x = Array.from(x.toString())
    
    if (x[0] === '-') {
        let neg = x.shift()
        x.reverse().unshift(neg)
        return +x.join('')
    }
    
    return +x.reverse().join('')
    
    
};