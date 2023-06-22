// https://leetcode.com/problems/unique-paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//Time complexity: O(2^(m+n))
// const uniquePaths = (m, n) => {
//     if (m === 1 && n === 1) return 1
//     if (m === 0 || n === 0) return 0
    
//     return uniquePaths(m-1, n) + uniquePaths(m, n-1)
// }



// var uniquePaths = function(m, n, memo={}) {
//     const key = m + ',' + n
    
//     if (key in memo) return memo[key]
//     if (m === 1 && n === 1) return 1
//     if (m === 0 || n === 0) return 0
    
//     memo[key] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo)
    
//     return memo[key]
    
// };


var uniquePaths = function(m, n, memo = new Map()) {
    const key = m + ',' + n
    
    if (memo.has(key)) return memo.get(key)
    if (m === 0 || n === 0) return 0
    if (m === 1 && n === 1) return 1
    
    
    memo.set(key, uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo))
    
    return memo.get(key)
};



