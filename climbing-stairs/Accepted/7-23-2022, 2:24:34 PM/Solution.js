// https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const climb = (i, n, memo = new Map()) => {
        if (i > n || n <= 0) return 0
        if (i === n) return 1
        if (memo.has(i)) return memo.get(i)
        
        memo.set(i, climb(i+1, n, memo) + climb(i+2, n, memo))
        return memo.get(i)
    }
    return climb(0, n)
};

// function climb(i, n, memo = {}) {
//     if(i > n || n <= 0) return 0
//     if (i === n) return 1
//     if (i in memo) return memo[i]
//     memo[i] = climb(i + 1, n, memo) + climb(i + 2, n, memo)
//     return memo[i]
// }



