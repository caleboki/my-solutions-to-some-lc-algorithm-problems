// https://leetcode.com/problems/shortest-path-in-binary-matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
//marking visited cells on input grid
// var shortestPathBinaryMatrix = function(grid) {
//     const getNeighbour = (d, r, c, g) => {
//         let neighbours = []
//         for (let i = 0; i < d.length; i++) {
//             let nRow = r + d[i][0]
//             let nCol = c + d[i][1]
            
//             if (nRow < 0 || nCol < 0 || nRow >= g.length || nCol >= g[0].length || g[nRow][nCol] !== 0) {
//                 continue
//             }
//             neighbours.push([nRow, nCol])
//         }
//         return neighbours 
//     }
    
//     let directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    
//     if (grid[0][0] !== 0 || grid[grid.length - 1][grid[0].length - 1] !== 0) return -1
    
//     let queue = [[0, 0]]
//     grid[0][0] = 1
    
//     while (queue.length) {
//         let cell = queue.shift()
//         let row = cell[0], col = cell[1]
//         let distance = grid[row][col]
        
//         if (row === grid.length - 1 && col === grid[0].length - 1) return distance
        
//         for (let neighbour of getNeighbour(directions, row, col, grid)) {
//             let nRow = neighbour[0]
//             let nCol = neighbour[1]
            
//             queue.push([nRow, nCol])
//             grid[nRow][nCol] = distance + 1
//         }
//     }
//     //Target was unreachable
//     return -1
// };

//recording visited cells in a set

// var shortestPathBinaryMatrix = function(grid) {
//     const getNeighbour = (d, r, c, g) => {
//         let neighbours = []
//         for (let i = 0; i < d.length; i++) {
//             let nRow = r + d[i][0]
//             let nCol = c + d[i][1]
            
//             if (nRow < 0 || nCol < 0 || nRow >= grid.length || nCol >= grid[0].length || grid[nRow][nCol] !== 0) {
//                 continue
//             }
//             neighbours.push([nRow, nCol])
//         }
//         return neighbours 
//     }
    
//     let directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    
//     if (grid[0][0] !== 0 || grid[grid.length - 1][grid[0].length - 1] !== 0) return -1
    
//     let queue = [[0, 0, 1]], visited = new Map()
//     visited.set('00', true)
    
//     while(queue.length) {
//         let cell = queue.shift()
//         let row = cell[0], col = cell[1], distance = cell[2]
//         if (row === grid.length - 1 && col === grid[0].length - 1) return distance
        
//         for (let neighbour of getNeighbour(directions, row, col, grid)) {
//             let nRow = neighbour[0]
//             let nCol = neighbour[1]
            
//             let current = nRow.toString() + nCol.toString()
//             if (visited.has(current)) continue
//             visited.set(current, true)
            
//             queue.push([nRow, nCol, distance + 1])
//         }
//     }
//     return -1
// }

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
    
    let currentLayer = [[0, 0]], nextLayer = [], currentDistance = 1, visited = new Map()
    visited.set('00', true)
    
    while(currentLayer.length) {
        for (let cell of currentLayer) {
            let row = cell[0]
            let col = cell[1]
            if (row === grid.length - 1 && col === grid[0].length - 1) return currentDistance
            for (let neighbour of getNeighbour(directions, row, col, grid)) {
                let nRow = neighbour[0]
                let nCol = neighbour[1]
                
                let current = nRow.toString() + nCol.toString()
                if (visited.has(current)) continue
                visited.set(current, true)
                
                nextLayer.push([nRow, nCol])
            }
        }
        currentLayer = nextLayer
        nextLayer = []
        currentDistance++
    }
    return -1
    
}