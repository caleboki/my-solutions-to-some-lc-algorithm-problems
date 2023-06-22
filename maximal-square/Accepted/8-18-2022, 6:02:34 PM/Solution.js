// https://leetcode.com/problems/maximal-square

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let rows = matrix.length, cols = matrix[0].length, max = 0
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i === 0 || j === 0) {
                matrix[i][j] = Number(matrix[i][j])
            } else {
                matrix[i][j] = matrix[i][j] === '0' ? 0 : 
                    (Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1)
            }
            max = Math.max(max, matrix[i][j])
        }
    }
    
    return max * max
};

