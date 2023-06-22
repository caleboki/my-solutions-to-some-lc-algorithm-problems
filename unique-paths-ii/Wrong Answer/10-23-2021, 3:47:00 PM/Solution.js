// https://leetcode.com/problems/unique-paths-ii

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// var uniquePathsWithObstacles = function(obstacleGrid) {
    
//     const m = obstacleGrid.length, n = obstacleGrid[0].length
    
//     if (obstacleGrid[m-1][n-1] === 1) return 0
//     if (m === 0 || n === 0) return 0
    
//     const dfs = (m, n, memo = new Map()) => {
//         const key = '' + m + n
//         if (memo.has(key)) return memo.get(key)
//         if (m === 1 && n === 1) return 1
//         if (m === 0 || n === 0) return 0
//         if (obstacleGrid[m-1][n-1] === 1) return 0
        
//         memo.set(key, dfs(m-1, n, memo) + dfs(m, n-1, memo))
//         return memo.get(key)
//     } 
    
//     return dfs(m, n)
    
  
// };

var uniquePathsWithObstacles = function (obstacleGrid) {
    var memo = {};
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    if (obstacleGrid[m-1][n-1] === 1) return 0;
    if (m === 0 || n === 0) return 1;

    function dfs(m, n) {
        var key = `${m}|${n}`;
        if (key in memo) return memo[key];
        if (m === 0 || n === 0) return 0;
        if (m === 1 && n === 1) return 1;
        if(obstacleGrid[m-1][n-1] === 1) return 0;
        return (memo[key] = dfs(m - 1, n) + dfs(m, n - 1));
    }
    return dfs(m, n);
};