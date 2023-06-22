// https://leetcode.com/problems/number-of-islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let nIslands = 0
    let rows = grid.length
    
    if(rows === 0) return 0
    
    //number of matrix columns. 0 because at least 1 row would always exist
    let cols = grid[0].length 
    
    for (let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j, rows, cols)
                nIslands++
            }
        }
    }
    return nIslands
};

function dfs(matrix, x, y, r, c){
    //handling out of bound and base case
    if (x < 0 || x >= r || y < 0 || y>=c || matrix[x][y] !== '1') return 
    
    matrix[x][y] = '2'
    
    dfs(matrix, x+1, y, r, c)
    dfs(matrix, x-1, y, r, c)
    dfs(matrix, x, y+1, r, c)
    dfs(matrix, x, y-1, r, c)
}

