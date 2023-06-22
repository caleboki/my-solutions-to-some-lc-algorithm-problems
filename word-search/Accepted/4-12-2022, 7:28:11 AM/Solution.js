// https://leetcode.com/problems/word-search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Idea: Loop through your board (i.e loop through each row and each cell with a nested loop) and if the current character corresponds to the first letter of the word AND the call of the dfs (see below) on the current row and col returns true then return true, else return false.
// The dfs function takes 3 parameters; the row number, column number and the index.
// Our base cases are:

// if the index is equal to our word length we return true.
// if we're out of bound or if the current char does not correspond to our word letter we return false.
// If none of these trigger then we start by putting a flag on the current cell (here we use !). This is done because the same letter may not be used more than once.
// Then we run the dfs on all adjacent positions. Those are: same row col+1, same row col-1, same col row+1, same col row -1.
// If any of these return true you've found your word so return true. Finally, don't forget to reset the current cell value.

var exist = function(board, word) {
    
    let rows = board.length, cols = board[0].length
    if (rows === 0) return 0
    //let cols = board[0].length
    
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



