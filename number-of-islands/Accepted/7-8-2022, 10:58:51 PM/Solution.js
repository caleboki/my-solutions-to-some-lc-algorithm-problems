// https://leetcode.com/problems/number-of-islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Set()
    const dfs = (matrix, x, y, r, c) => {
        //handling out of bound and base case
        if (x < 0 || x >= r || y < 0 || y>=c || matrix[x][y] !== '1') return 

        matrix[x][y] = '2'
        visited.add(x.toString() + y.toString())
        dfs(matrix, x+1, y, r, c) //right
        dfs(matrix, x-1, y, r, c) //left
        dfs(matrix, x, y+1, r, c) //up
        dfs(matrix, x, y-1, r, c) //down
    }
    
    let nIslands = 0
    let rows = grid.length
    
    if(rows === 0) return 0
    
    //number of matrix columns. 0 because at least 1 row would always exist
    let cols = grid[0].length
    
    //traverse grid
    for (let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j, rows, cols)
                nIslands++
            }
        }
    }
    console.log(visited)
    return nIslands
};


// var numIslands = function(grid) {
    
//     let nIslands = 0
//     let rows = grid.length
    
//     if(rows === 0) return 0
    
//     //number of matrix columns. 0 because at least 1 row would always exist
//     let cols = grid[0].length 
    
//     //traverse grid
//     for (let i = 0; i < rows; i++) {
//         for(let j = 0; j < cols; j++) {
//             if (grid[i][j] === '1') {
                
//                 let queue = [[i, j]]
                
//                 while (queue.length) {
//                     let current = queue.shift()
                    
//                     let [row, col] = current
                    
//                     if (row - 1 >= 0 && grid[row-1][col] === '1') {
//                         queue.push([row-1, col])
//                         grid[row-1][col] = '0'
//                     }
                    
//                     if (row + 1 < rows && grid[row+1][col] === '1') {
//                         queue.push([row+1, col])
//                         grid[row+1][col] = '0'
//                     }
                    
//                     if (col - 1 >= 0 && grid[row][col-1] === '1') {
//                         queue.push([row, col-1])
//                         grid[row][col-1] = '0'
//                     }
                    
//                     if (col + 1 < cols && grid[row][col+1] === '1') {
//                         queue.push([row, col+1])
//                         grid[row][col+1] = '0'
//                     }
//                 }
                
//                 nIslands++
//             }
//         }
//     }
//     return nIslands
// };





