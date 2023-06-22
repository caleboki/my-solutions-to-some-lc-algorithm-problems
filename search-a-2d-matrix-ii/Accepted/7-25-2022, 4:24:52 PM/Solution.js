// https://leetcode.com/problems/search-a-2d-matrix-ii

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false
    
    let rows = matrix.length, cols = matrix[0].length
    
    const binarySearch = (row, target) => {
        let left = 0, right = row.length - 1
        
        while (left <= right) {
            let mid = Math.floor((left + right)/2)
 
            if (row[mid] === target) {
                return true
            } else if (row[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return false
        
    }
    
    // for (let i = 0; i < rows; i++) {
    //     for (let j = 0; j < cols; j++) {
    //         //if (matrix[i][j] === target) return true
    //         if (!binarySeary(matrix[i], target)) {
    //             break
    //         } else {
    //             return true
    //         }
    //     }
    // }
    // return false
    
    
    for (let i = 0; i < rows; i++) {
        
        if (binarySearch(matrix[i], target)) return true
    }
    
    return false
    
};