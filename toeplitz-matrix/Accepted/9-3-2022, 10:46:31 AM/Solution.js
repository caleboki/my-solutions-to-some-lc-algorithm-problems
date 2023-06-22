// https://leetcode.com/problems/toeplitz-matrix

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let rows = matrix.length, cols = matrix[0].length
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i > 0 && j > 0 && matrix[i-1][j-1] !== matrix[i][j]) return false
        }
    }
    
    return true
};