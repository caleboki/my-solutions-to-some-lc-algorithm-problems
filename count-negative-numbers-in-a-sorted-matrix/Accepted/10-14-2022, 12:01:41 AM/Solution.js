// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0, row = grid.length, col = grid[0].length

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] < 0) count++
        }
    }

    return count


    
};