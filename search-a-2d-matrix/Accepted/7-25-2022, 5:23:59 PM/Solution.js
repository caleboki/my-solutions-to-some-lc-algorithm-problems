// https://leetcode.com/problems/search-a-2d-matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false
    
    let rows = matrix.length, cols = matrix[0].length
    
    const binarySearch = () => {}
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === target) return true
        }
    }
    
    return false
    
};