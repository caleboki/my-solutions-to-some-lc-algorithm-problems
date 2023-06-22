// https://leetcode.com/problems/longest-increasing-path-in-a-matrix

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (matrix.length === 0) return 0
    
    let rows = matrix.length, cols = matrix[0].length, count = 0
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    
    const dfs = (matrix, i, j) => {
        count = 0
        
        for (let d of directions) {
            let x = d[0] + i, y = d[1] + j
            if (0 <= x && x < rows && 0 <= cols && y < cols && matrix[x][y] > matrix[i][j]) {
                count = Math.max(count, dfs(matrix, x, y))
            }
        }
        count++
        return count
        
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            count = Math.max(count, dfs(matrix, i, j))
        }
    }
    
    return count
    
    
};