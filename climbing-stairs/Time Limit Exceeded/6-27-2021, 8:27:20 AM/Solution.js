// https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return climb(0, n)
    
    
};

function climb(i, n) {
    if(i > n) return 0
    if (i === n) return 1
    return climb(i + 1, n) + climb(i + 2, n)
}