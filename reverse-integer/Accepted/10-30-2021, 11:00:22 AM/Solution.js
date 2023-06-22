// https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let  maxInteger = 2147483647
    
    let absAns = helper(Math.abs(x))
    
  return absAns > maxInteger ? 0 : absAns*Math.sign(x);
    
  function helper(x, sum = 0) {
      
    if (x <= 9) return sum + (x % 10);

    return helper(Math.floor(x / 10), (sum + (x % 10)) * 10);
  }
};