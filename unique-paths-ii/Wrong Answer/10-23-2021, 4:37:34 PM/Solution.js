// https://leetcode.com/problems/unique-paths-ii

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// var uniquePathsWithObstacles = function(obstacleGrid) {
    
//     const m = obstacleGrid.length, n = obstacleGrid[0].length
    
//     if (obstacleGrid[0][0] === 1) return 0
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

var uniquePathsWithObstacles = function(obstacleGrid) {
    
    const m = obstacleGrid.length, n = obstacleGrid[0].length
    
    if (obstacleGrid[0][0] === 1) return 0
    if (obstacleGrid[m-1][n-1] === 1) return 0
    if (m === 0 || n === 0) return 0
    
    const top = (row, col) => {
        let path = 0
        
        for (let i = 0; i < row-1; i++) {
            if (obstacleGrid[i][0] === 1) return path
        }
        
        for (let j = 0; j < col-1; j++) {
            
            if (obstacleGrid[0][j] === 1) return path
        }
        
        path++
        
        return path
        
    }
    
    const side = (row, col) => {
        let path = 0
        
        for (let j = 0; j < col; j++) {
            
            if (obstacleGrid[0][j] === 1) {
                return path
            }
            
        }
        
        for (let i = 0; i < row; i++) {
            
            if (obstacleGrid[i][0] === 1) return path
        }
        
        path++
        return path 
    }
    
    return top(m, n) + side(m, n)
};

