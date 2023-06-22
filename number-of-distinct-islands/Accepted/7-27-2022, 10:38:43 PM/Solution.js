// https://leetcode.com/problems/number-of-distinct-islands

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    if (grid.length === 0) return 0
    
    let rows = grid.length, cols = grid[0].length, isLands = new Set()
    
    const dfs = (grid, rows, cols, i, j, dir) => {
        
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== 1) return 'O'
        
        grid[i][j] = 0
        
        let right = dfs(grid, rows, cols, i+1, j, 'R')
        let left = dfs(grid, rows, cols, i-1, j, 'L')
        let up = dfs(grid, rows, cols, i, j+1, 'U')
        let down = dfs(grid, rows, cols, i, j-1, 'D')
        
        return dir + right + left + up + down
        
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) isLands.add(dfs(grid, rows, cols, i, j, 'X'))
        }
    }

    return isLands.size
    
};