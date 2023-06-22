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
    
    // Calculate the distance travelled within the first column
	// This is because each square depends on the one above
	// And the one to the left. However there is nothing left
	// of the first column so we can calculate it by adding
	// the current square to the square above it
    
    for (let i = 1; i < rows; i++) {
        grid[i][0] += grid[i-1][0]
    }
    
    // The same goes for the first row. There is nothing above the 
	// first row. So we just calculate the distance by what is to the left
	// of it
    
    for (let j = 1; j < cols; j++) {
        grid[0][j] += grid[0][j-1]
    }
    
    // Start one row and one column in because we've precomputed those above
    
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            // The distance to the grid at i,j is equal to itself plus the minimum
			// of the two grid spaces (one above, one to the left)
            
            grid[i][j] += Math.min(grid[i][j-1], grid[i-1][j])
        }
    }
    
    // Return the distance bottom right corner
    
    return grid[rows-1][cols-1]
}
