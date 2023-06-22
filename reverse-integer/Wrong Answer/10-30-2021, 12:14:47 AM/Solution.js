// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = +Array.from(x.toString()).reverse().join('')
    return x
    
};