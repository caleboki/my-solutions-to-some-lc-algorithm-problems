// https://leetcode.com/problems/word-search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function(board, word) {
    
//     let wordMap = new Map()
    
//     for (let w of word) {
//         if (wordMap.has(w)) {
//             wordMap.set(w, wordMap.get(w) + 1)
//         } else {
//             wordMap.set(w, 1)
//         } 
//     }
//     //console.log(wordMap)
    
//     let count = 0, rows = board.length
    
//     if (rows === 0) return 0
    
//     let cols = board[0].length
    
//     //traverse board
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
            
//             if (wordMap.has(board[i][j]) && wordMap.get(board[i][j]) > 0) {   
//                 dfs(wordMap, board, i, j, rows, cols)
                
//                 //wordMap.set(board[i][j], wordMap.get(board[i][j])-1)
//             }
//         }
//     }
//     //console.log(wordMap)
//     for (let [key, value] of wordMap) {
//         if (value > 0) return false
//     }
//     return true
    
// };

// function dfs(map, matrix, x, y, r, c) {
//     //handling out of bound cases
//     if (x < 0 || x >=r || y < 0 || y >=c || !map.has(matrix[x][y]) || map.get(matrix[x][y]) === 0) return
    
//     map.set(matrix[x][y], map.get(matrix[x][y])-1)
//     matrix[x][y] = '!'
    
//     console.log(map)
//     dfs(map, matrix, x+1, y, r, c)
//     dfs(map, matrix, x-1, y, r, c)
//     dfs(map, matrix, x, y+1, r, c)
//     dfs(map, matrix, x, y-1, r, c)
// }

var exist = function(board, word) {
    
    let rows = board.length
    if (rows === 0) return 0
    let cols = board[0].length
    
    const dfs = (x, y, i) => {
        if (word.length === i) return true
        if (x < 0 || x >= rows || board[x][y] !== word[i]) return false
        
        board[x][y] = '!'
        
        if (
            dfs(x+1, y, i+1) || 
            dfs(x-1, y, i+1) || 
            dfs(x, y+1, i+1) ||
            dfs(x, y-1, i+1)
        ) return true
        
        board[x][y] = word[i] //???
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) return true
        }
    }
    return false
    
}



