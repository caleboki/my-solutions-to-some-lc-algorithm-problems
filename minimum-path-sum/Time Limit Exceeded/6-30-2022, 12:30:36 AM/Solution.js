// https://leetcode.com/problems/minimum-path-sum

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    const traverse = (grid, i, j) => {
        if (i === grid.length || j === grid[0].length) return Infinity
        if (i === grid.length-1 && j === grid[0].length-1) return grid[i][j]
        
        return grid[i][j] + Math.min(traverse(grid, i + 1, j), traverse(grid, i, j+1))
        
        
    }
    
    return traverse(grid, 0, 0)
    
};

// var uniquePaths = function(m, n, memo = new Map()) {
//     const key = m + ',' + n
    
//     if (memo.has(key)) return memo.get(key)
//     if (m === 0 || n === 0) return 0
//     if (m === 1 && n === 1) return 1
    
//     memo.set(key, uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo))
    
//     return memo.get(key)
// };