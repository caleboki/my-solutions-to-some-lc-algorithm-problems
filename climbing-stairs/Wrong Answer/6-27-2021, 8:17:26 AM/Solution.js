// https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    return factorial(n)/factorial(n-1)
    
    
};

function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (n > 0)
    return n;
  return n = factorial(n-1) * n;
}