// https://leetcode.com/problems/design-tic-tac-toe

/**
 * @param {number} n
 */
// var TicTacToe = function(n) {
    
// };

// /** 
//  * @param {number} row 
//  * @param {number} col 
//  * @param {number} player
//  * @return {number}
//  */
// TicTacToe.prototype.move = function(row, col, player) {
    
// };

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */


class TicTacToe {
    constructor(n) {
        this.n = n
        this.board = Array.from({length: n}, (v, i) => [])
    }
    
    move(row, col, player) {
        this.board[row][col] = player
        
        for (let i = 0; i < this.n-1; i++) {
            if (checkRow(this.board, row, player) || 
                checkColumn(this.board, col, player) ||
                checkDiagonal(this.board, player) ||
                checkAntiDiagonal(this.board, player)) return player
        }
        return 0
    }
}

const checkDiagonal = (b, p) => {
    
    for (let r = 0; r < b.length; r++) {
        if (b[r][r] !== p) return false
    }
    return true
}

const checkAntiDiagonal = (b, p) => {
    
    for (let r = 0; r < b.length; r++) {
        if (b[r][b.length - r - 1] !== p) return false
    }
    return true
}

const checkRow = (b, r, p) => {
    
    for (let c = 0; c < b.length; c++) {
        if (b[r][c] !== p) return false
    }
    return true
}

const checkColumn = (b, c, p) => {
    
    for (let r = 0; r < b.length; r++) {
        if (b[r][c] !== p) return false
    }
    return true
}

