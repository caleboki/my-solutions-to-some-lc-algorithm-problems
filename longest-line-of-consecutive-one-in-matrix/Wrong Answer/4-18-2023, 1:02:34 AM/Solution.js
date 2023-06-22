// https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix

/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function(mat) {
    //traverse the grid
    let max = 0, rows = mat.length, cols = mat[0].length

    if (rows === 0) return 0

    //horizontal
    for (let i = 0; i < rows; i++) {
        let count = 0
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 1) {
                count++
                max = Math.max(max, count)
            } else {
                count = 0
            }
        }
    }

    //vertical
    for (let i = 0; i < cols; i++) {
        let count = 0
        for (let j = 0; j < rows; j++) {
            if (mat[j][i] === 1) {
                count++
                max = Math.max(max, count)
            } else {
                count = 0
            }
        }
    }

    //upper diagonal
    for (let i = 0; i < cols || i < rows; i++) {
        let count = 0
        for (let j = 0, y = i; j < rows && y < cols; j++, y++) {
            if (mat[j][y] === 1) {
                count++
                max = Math.max(max, count)
            } else {
                count = 0
            }
        }
    }

    //lower diagonal
    for (let i = 0; i < cols || i < rows; i++) {
        let count = 0
        for (let j = 0, y = 0; j < rows && y < cols; j++, y++) {
            if (mat[j][y] === 1) {
                count++
                max = Math.max(max, count)
            } else {
                count = 0
            }
        }
    }

    //upper anti-diagonal
    for (let i = 0; i < cols || i < rows; i++) {
        let count = 0
        for (let j = 0, y = cols-i-1; j < rows && y >= 0; j++, y--) {
            if (mat[j][y] === 1) {
                count++
                max = Math.max(max, count)
            } else {
                count = 0
            }
        }
    }

    //lower anti-diagonal
    for (let i = 0; i < cols || i < rows; i++) {
        let count = 0
        for (let j = i, y = cols-1; j < rows && y >= 0; j++, y--) {
            if (mat[j][y] === 1) {
                count++
                max = Math.max(max, count)
            } else {
                count = 0
            }
        }
    }

    return max
    
};