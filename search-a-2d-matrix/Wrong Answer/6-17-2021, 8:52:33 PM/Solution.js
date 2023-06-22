// https://leetcode.com/problems/search-a-2d-matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let newMatrix = []
    
    for (let i = 0; i < matrix.length; i++) {
        newMatrix.push(...matrix[i])
    }
    
    if (newMatrix.find(m => m === target)) return true
    return false
    
};