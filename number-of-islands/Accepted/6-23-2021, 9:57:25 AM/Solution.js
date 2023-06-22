// https://leetcode.com/problems/number-of-islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let nIslands = 0
    let rows = grid.length
    
    if(rows === 0) return 0
    let cols = grid[0].length
    
    for (let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                markCurrentIsland(grid, i, j, rows, cols)
                nIslands++
            }
        }
    }
    return nIslands
};

function markCurrentIsland(matrix, x, y, r, c){
    if (x < 0 || x >= r || y < 0 || y>=c || matrix[x][y] !== '1') return 
    
    matrix[x][y] = '2'
    
    markCurrentIsland(matrix, x+1, y, r, c)
    markCurrentIsland(matrix, x, y+1, r, c)
    markCurrentIsland(matrix, x-1, y, r, c)
    markCurrentIsland(matrix, x, y-1, r, c)
    
}

