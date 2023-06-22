// https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo={}) {
   
    
    return climb(0, n, memo)
    
    
};

function climb(i, n, memo = {}) {
    if(i > n || n <= 0) return 0
    if (i === n) return 1
    if (n in memo) return memo[n]
    memo[n] = climb(i + 1, n, memo) + climb(i + 2, n, memo)
    return memo[n]
}