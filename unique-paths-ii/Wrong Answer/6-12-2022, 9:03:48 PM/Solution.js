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

// var uniquePathsWithObstacles = function(obstacleGrid) {
    
//     const m = obstacleGrid.length, n = obstacleGrid[0].length
    
//     if (obstacleGrid[0][0] === 1) return 0
//     if (obstacleGrid[m-1][n-1] === 1) return 0
//     if (m === 0 || n === 0) return 0
//     if (m === 1 && n === 1 && obstacleGrid[0][0] === 0 ) return 1
    
//     const top = (row, col) => {
//         let path = 0
        
//         for (let i = 0; i < row-1; i++) {
//             if (obstacleGrid[i][0] === 1) return path
//         }
        
//         for (let j = 0; j < col-1; j++) {
            
//             if (obstacleGrid[0][j] === 1) return path
//         }
        
//         path++
        
//         return path
        
//     }
    
//     const side = (row, col) => {
//         let path = 0
        
//         for (let j = 0; j < col; j++) {
            
//             if (obstacleGrid[0][j] === 1) {
//                 return path
//             }
            
//         }
        
//         for (let i = 0; i < row; i++) {
            
//             if (obstacleGrid[i][0] === 1) return path
//         }
        
//         path++
//         return path 
//     }
    
//     return top(m, n) + side(m, n)
// };

//Runtime O(n*m)
//Space O(n + m)
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    const dfs = (grid, i, j, memo = new Map()) => {
        //check if we are within bounds
        if (i > grid.length - 1 || j > grid[0].length) return 0
        
        if (grid[i][j] === 1) return 0 //check if the particular cell has an obstacle
        
        //check if have reached the bottom of the grid
        if (i === grid.length - 1 && j === grid[0].length - 1) return 1
        
        //let key = '' + i + j
        let key = `${i+j}`
        if (memo.has(key)) return memo.get(key)
        
        let down = dfs(grid, i+1, j, memo) //movement down
        let right = dfs(grid, i, j+1, memo) //movement right
        
        memo.set(key, down+right) //store value in memo
        return memo.get(key)
    }
    return dfs(obstacleGrid, 0, 0)
    
};

