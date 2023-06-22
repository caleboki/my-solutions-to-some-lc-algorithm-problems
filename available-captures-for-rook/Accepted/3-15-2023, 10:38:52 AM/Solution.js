// https://leetcode.com/problems/available-captures-for-rook

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    // Find the position of the white rook
    let rookRow, rookCol;
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (board[row][col] === 'R') {
                rookRow = row;
                rookCol = col;
                break;
            }
        }
    }
    // Check for pawns in the rook's path
    let captures = 0;
    for (let row = rookRow - 1; row >= 0; row--) { // North
        if (board[row][rookCol] === 'B') {
            break;
        } else if (board[row][rookCol] === 'p') {
            captures++;
            break;
        }
    }
    for (let row = rookRow + 1; row < 8; row++) { // South
        if (board[row][rookCol] === 'B') {
            break;
        } else if (board[row][rookCol] === 'p') {
            captures++;
            break;
        }
    }
    for (let col = rookCol - 1; col >= 0; col--) { // West
        if (board[rookRow][col] === 'B') {
            break;
        } else if (board[rookRow][col] === 'p') {
            captures++;
            break;
        }
    }
    for (let col = rookCol + 1; col < 8; col++) { // East
        if (board[rookRow][col] === 'B') {
            break;
        } else if (board[rookRow][col] === 'p') {
            captures++;
            break;
        }
    }
    return captures;
};
