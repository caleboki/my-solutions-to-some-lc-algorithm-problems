// https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo={}) {
    if (n in memo) return memo[n]
    memo[n] = climb(0, n, memo)
    
    return memo[n]
    
    
};

function climb(i, n, memo) {
    if(i > n || n <= 0) return 0
    if (i === n) return 1
    return climb(i + 1, n) + climb(i + 2, n)
}