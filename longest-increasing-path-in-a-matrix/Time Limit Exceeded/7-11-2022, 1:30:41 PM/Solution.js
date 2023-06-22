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

// const longestIncreasingPath = (matrix) => {
//     if (matrix.length === 0) return 0
    
//     let rows = matrix.length, cols = matrix[0].length, count = 0, map = new Map()
    
//     const isOutside = (i, j) => i < 0 || j < 0 || i >= rows || j >= cols
    
//     const dfs = (matrix, i, j, prev) => {
//         const key = `${i}|${j}`
        
//         if(isOutside(i, j) || matrix[i][j] <= prev) return 0
//         if (map.has(key)) return map.get(key)
        
//         const num = matrix[i][j]
        
//         const l = dfs(matrix, i, j - 1, num)
//         const r = dfs(matrix, i, j + 1, num)
//         const t = dfs(matrix, i - 1, j, num)
//         const d = dfs(matrix, i + 1, j, num)
        
//         map.set(key, Math.max(l, r, t, d) + 1)
//         count = Math.max(count, map.get(key))
        
//         return map.get(key)
//     }
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             dfs(matrix, i, j, -Infinity) 
//         }
//     }
//     return count
// }