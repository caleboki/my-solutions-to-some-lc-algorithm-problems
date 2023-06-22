// https://leetcode.com/problems/word-search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    let wordMap = new Map()
    
    for (let w of word) {
        if (wordMap.has(w)) {
            wordMap.set(w, wordMap.get(w) + 1)
        } else {
            wordMap.set(w, 1)
        } 
    }
    //console.log(wordMap)
    
    let count = 0, rows = board.length
    
    if (rows === 0) return 0
    
    let cols = board[0].length
    
    //traverse board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            
            if (wordMap.has(board[i][j]) && wordMap.get(board[i][j]) > 0) {   
                dfs(wordMap, board, i, j, rows, cols)
                
                //wordMap.set(board[i][j], wordMap.get(board[i][j])-1)
            }
        }
    }
    //console.log(wordMap)
    for (let [key, value] of wordMap) {
        if (value > 0) return false
    }
    return true
    
};

function dfs(map, matrix, x, y, r, c) {
    //handling out of bound cases
    if (x < 0 || x >=r || y < 0 || y >=c || !map.has(matrix[x][y]) || map.get(matrix[x][y]) === 0) return
    
    map.set(matrix[x][y], map.get(matrix[x][y])-1)
    matrix[x][y] = '!'
    
    console.log(map)
    dfs(map, matrix, x+1, y, r, c)
    dfs(map, matrix, x-1, y, r, c)
    dfs(map, matrix, x, y+1, r, c)
    dfs(map, matrix, x, y-1, r, c)
}


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
//                 dfs(grid, i, j, rows, cols)
//                 nIslands++
//             }
//         }
//     }
//     return nIslands
// };

// function dfs(matrix, x, y, r, c){
//     //handling out of bound and base case
//     if (x < 0 || x >= r || y < 0 || y>=c || matrix[x][y] !== '1') return 
    
//     matrix[x][y] = '2'
    
//     dfs(matrix, x+1, y, r, c) //right
//     dfs(matrix, x-1, y, r, c) //left
//     dfs(matrix, x, y+1, r, c) //up
//     dfs(matrix, x, y-1, r, c) //down
// }