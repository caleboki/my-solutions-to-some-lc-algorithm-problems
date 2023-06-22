// https://leetcode.com/problems/as-far-from-land-as-possible

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    if (grid.length === 0) return -1
    
    let rows = grid.length, cols = grid[0].length, queue = [], directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) queue.push([i, j, 0])
        }
    }
    
    if (queue.length === 0) return -1
    
    let result = 0
    
    while (queue.length > 0) {
        let length = queue.length
        let currentLevel = []
        
        for (let i = 0; i < length; i++) {
            const [row, col, distance] = queue.shift()
            
            if (grid[row][col] === '#') continue
            grid[row][col] = '#'
            
            result = distance
            
            for (let [r, c] of directions) {
                let newR = row + r, newC = col + c
                if (newR < 0 || newC < 0 || newR >= grid.length || newC >= grid[0].length) continue
                //only interested in directions with zeroes hence discarding ones
                if (grid[newR][newC] === 0) currentLevel.push([newR, newC, distance + 1])
            }
        }
        queue = currentLevel
    }
    return result ? result : -1
   
};