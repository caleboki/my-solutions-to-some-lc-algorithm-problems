// https://leetcode.com/problems/search-a-2d-matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false
    
    let rows = matrix.length, cols = matrix[0].length
    
    const binarySearch = (row, target) => {
        let l = 0, r = row.length - 1
        
        while (l <= r) {
            let mid = Math.floor((l+r)/2)
            
            if (row[mid] === target) {
                return true
            } else if (row[mid] < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return false
    }
    
    // for (let i = 0; i < rows; i++) {
    //     for (let j = 0; j < cols; j++) {
    //         if (matrix[i][j] === target) return true
    //     }
    // }
    
    for (let i = 0; i < rows; i++) {
        if (binarySearch(matrix[i], target)) return true
    }
    
    return false
    
};