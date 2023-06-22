// https://leetcode.com/problems/number-of-closed-islands

/**
 * @param {number[][]} grid
 * @return {number}
 */
//https://www.youtube.com/watch?v=MnD8KhBHgRo
var closedIsland = function(grid) {
    if (grid.length === 0) return 0
    
    let rows = grid.length, cols = grid[0].length, closed = 0
    
    const dfs = (grid, rows, cols, i, j) => {
        //are we are bordered by a 1 or a 1 is adjacent or has cell been visited
        if (grid[i][j] === -1 || grid[i][j] === 1) return true  
        
        if (i <= 0 || i >= rows-1 || j <= 0 || j >= cols-1) return false
        
        grid[i][j] = -1
        
        let right = dfs(grid, rows, cols, i+1, j)
        let left = dfs(grid, rows, cols, i-1, j)
        let up = dfs(grid, rows, cols, i, j+1)
        let down = dfs(grid, rows, cols, i, j-1)
        
        return (right === true && left === true && up === true && down === true)
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