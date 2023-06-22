// https://leetcode.com/problems/toeplitz-matrix

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let rows = matrix.length, cols = matrix[0].length
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i !== j) continue
            if (matrix[i][j] !== matrix[0][0]) return false
        }
    }
    
    return true
};