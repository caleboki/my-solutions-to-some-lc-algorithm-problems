// https://leetcode.com/problems/search-a-2d-matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//Linear Search ?
// var searchMatrix = function(matrix, target) {
//     let newMatrix = []
    
//     for (let i = 0; i < matrix.length; i++) {
//         newMatrix.push(...matrix[i])
//     }
    
//     if (newMatrix.find(f => f === target) !== undefined) return true
//     return false
    
// };

//Binary search
var searchMatrix = function(matrix, target) {
    matrix = matrix.flat()
    
    let left = 0, right = matrix.length - 1
    
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        
        if(matrix[mid] === target) {
            return true
        } else if(target < matrix[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false 
};