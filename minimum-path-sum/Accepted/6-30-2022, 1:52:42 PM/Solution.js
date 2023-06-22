// https://leetcode.com/problems/minimum-path-sum

/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {
    
//     const traverse = (grid, i, j) => {
//         if (i === grid.length || j === grid[0].length) return Infinity
//         if (i === grid.length-1 && j === grid[0].length-1) return grid[i][j]
        
//         return grid[i][j] + Math.min(traverse(grid, i + 1, j), traverse(grid, i, j+1))
//     }
    
//     return traverse(grid, 0, 0)
// };

const minPathSum = (grid) => {
    const rows = grid.length
    const cols = grid[0].length
    
    for (let i = 1; i < rows; i++) {
        grid[i][0] += grid[i-1][0]
    }
    
    for (let j = 1; j < cols; j++) {
        grid[0][j] += grid[0][j-1]
    }
    
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            
            grid[i][j] += Math.min(grid[i][j-1], grid[i-1][j])
            
        }
    }
    
    return grid[rows-1][cols-1]
    
    
}
