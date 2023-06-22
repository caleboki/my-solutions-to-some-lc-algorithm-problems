// https://leetcode.com/problems/number-of-submatrices-that-sum-to-target

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
// var numSubmatrixSumTarget = function(matrix, target) {
//     let count = 0, sum = 0
    
//     for (let i = 0; i < matrix.length; i++) {
        
//         for (let j = 0; j < matrix[0].length; j++) {
//             sum += matrix[i][j]

//             if (sum === target) {
//                 count++
//             }
//         }
//         sum = 0
        
//     }
//     count = 2 * count
//     sum = 0
    
//     let rows = matrix.length, cols = matrix[0].length
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             sum += matrix[i][j]
//         }
//     }
//     if (sum === target)count++
    
//     return count
// };

const numSubmatrixSumTarget = (matrix, target) => {
    let rows = matrix.length, cols = matrix[0].length, hash = {}, ans = 0
    
    for (let r = 0; r < rows; r++) {
        for (let j = 1; j < cols; j++) {
            matrix[r][j] += matrix[r][j-1]
        }
    }
    
    for (let j = 0; j < cols; j++) {
        
        for (let k = j; k < cols; k++) {
            hash = {}
            hash[0] = 1
            
            let csum = 0
            
            for (let i = 0; i < rows; i++) {
                csum += matrix[i][k] - (j > 0 ? matrix[i][j-1] : 0)
                ans += hash[csum - target] || 0
                hash[csum] = (hash[csum] || 0) + 1
            }
            
        }
    }
    
    return ans
}