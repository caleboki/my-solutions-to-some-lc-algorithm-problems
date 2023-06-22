// https://leetcode.com/problems/number-of-submatrices-that-sum-to-target

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    let count = 0, sum = 0
    
    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[0].length; j++) {
            sum += matrix[i][j]

            if (sum === target) {
                count++
            }
        }
        sum = 0
        
    }
    count = 2 * count
    sum = 0
    
    let rows = matrix.length, cols = matrix[0].length
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            sum += matrix[i][j]
        }
    }
    if (sum === target)count++
    
    
    
    return count
    
};