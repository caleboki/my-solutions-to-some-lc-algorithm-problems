// https://leetcode.com/problems/shortest-path-in-binary-matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    
    const getNeighbour = (d, r, c, g) => {
        let neighbours = []
        for (let i = 0; i < d.length; i++) {
            let nRow = r + d[i][0]
            let nCol = c + d[i][1]
            
            if (nRow < 0 || nCol < 0 || nRow >= grid.length || nCol >= grid[0].length || grid[nRow][nCol] !== 0) {
                continue
            }
            neighbours.push([nRow, nCol])
        }
        return neighbours 
    }
    
    let directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    
    if (grid[0][0] !== 0 || grid[grid.length - 1][grid[0].length - 1] !== 0) return -1
    
    let queue = [[0, 0]]
    grid[0][0] = 1
    
    while (queue.length) {
        let cell = queue.shift()
        let row = cell[0], col = cell[1]
        let distance = grid[row][col]
        
        if (row === grid.length - 1 && col === grid[0].length - 1) return distance
        
        for (let neighbour of getNeighbour(directions, row, col, grid)) {
            let nRow = neighbour[0]
            let nCol = neighbour[1]
            
            queue.push([nRow, nCol])
            grid[nRow][nCol] = distance + 1
        }
    }
    //Target was unreachable
    return -1
};