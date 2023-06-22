// https://leetcode.com/problems/number-of-closed-islands

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    if (grid.length === 0) return 0
    
    let rows = grid.length, cols = grid[0].length, closed = 0
    
    const dfs = (grid, rows, cols, i, j) => {
        if (i <= 0 || i >= rows-1 || j <= 0 || j >= cols-1 || grid[i][j] !== 0) return false
        
        grid[i][j] = -1
        
        dfs(grid, rows, cols, i+1, j)
        dfs(grid, rows, cols, i-1, j)
        dfs(grid, rows, cols, i, j+1)
        dfs(grid, rows, cols, i, j-1)
        
        return true
    }
    
    for (let i = 1; i < rows-1; i++) {
        for (let j = 1; j < cols-1; j++) {
            if (grid[i][j] === 0) {
                if (dfs(grid, rows, cols, i, j)) closed++
            }
        }
    }
    return closed
    
};