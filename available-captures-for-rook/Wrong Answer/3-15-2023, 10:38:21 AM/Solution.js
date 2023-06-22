// https://leetcode.com/problems/available-captures-for-rook

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    //find the position of the white rook
    let rookRow, rookCol
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === 'R') {
                rookRow = row
                rookCol = col
                break
            }
        }
    }

    //Check pawns in the rook's path
    let captures = 0
    //North
    for (let row = rookRow - 1; row >= 0; row--) {
        if (board[row][rookRow] === 'B') {
            break
        } else if (board[row][rookCol] === 'p') {
            captures++
            break
        }
    }

    //South
    for (let row = rookRow + 1; row < board.length; row++) {
        if (board[row][rookRow] === 'B') {
            break
        } else if (board[row][rookCol] === 'p') {
            captures++
            break
        }
    }

    //West
    for (let col = rookCol - 1; col >= 0; col--) {
        if (board[rookRow][col] === 'B') {
            break
        } else if (board[rookRow][col] === 'p') {
            captures++
            break
        }
    }

    //East
    for (let col = rookCol + 1; col < board.length; col++) {
        if (board[rookRow][col] === 'B') {
            break
        } else if (board[rookRow][col] === 'p') {
            captures++
            break
        }
    }
    return captures
};