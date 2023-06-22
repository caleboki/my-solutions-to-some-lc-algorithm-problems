// https://leetcode.com/problems/max-area-of-island

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    //traverse the grid
    let max = 0, rows = grid.length, cols = grid[0].length
    
    if (rows === 0) return 0
    
    const dfs = (grid, i, j) => {
        //Check if we are within bounds of the grid/matrix
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] !== 1) {
            return 0
        }
    
        grid[i][j] = 2
        let count = 1

        count += dfs(grid, i+1, j)
        count += dfs(grid, i-1, j)
        count += dfs(grid, i, j+1)
        count += dfs(grid, i, j-1)

        return count  
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                //updating max: passing the grid so we can change the 
                //co-ordinates, i and j so we know the co-ordinates we 
                //are on when we find the island
                max = Math.max(max, dfs(grid, i, j))
            }
        }
    }
    
    return max
};

