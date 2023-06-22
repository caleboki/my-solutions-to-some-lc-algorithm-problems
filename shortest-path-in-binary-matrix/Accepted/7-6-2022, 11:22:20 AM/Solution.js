// https://leetcode.com/problems/shortest-path-in-binary-matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
//marking visited cells on input grid
const shortestPathBinaryMatrix = (grid) => {
  let directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

  const getNeighbors = (directions, row, col, grid) => {
    let neighbours = []

    for (let d of directions) {
      let nRow = row + d[0], nCol = col + d[1]

      if (nRow < 0 || nCol < 0 || nRow >= grid.length || nCol >= grid[0].length || grid[nRow][nCol] !== 0) {
        continue
      }
      neighbours.push([nRow, nCol])
    }

    return neighbours
  }

  const bfs = (grid) => {
    if (grid[0][0] !== 0 || grid[grid.length - 1][grid[0].length - 1] !== 0) return -1

    let queue = [[0, 0]]
    grid[0][0] = 1

    while (queue.length) {
      //let cell = queue.shift()
      let [row, col] = queue.shift()
      let distance = grid[row][col]

      if (row === grid.length - 1 && col === grid[0].length - 1) return distance

      for (let neighbor of getNeighbors(directions, row, col, grid)) {
        let [nRow, nCol] = neighbor

        queue.push([nRow, nCol])
        grid[nRow][nCol] = distance + 1
      }

    }

    return -1
  }

  return bfs(grid)
}
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

// Starting a new collection for each distance
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
    
//     let currentLayer = [[0, 0]], nextLayer = [], currentDistance = 1, visited = new Map()
//     visited.set('00', true)
    
//     while(currentLayer.length) {
//         for (let cell of currentLayer) {
//             let row = cell[0]
//             let col = cell[1]
//             if (row === grid.length - 1 && col === grid[0].length - 1) return currentDistance
//             for (let neighbour of getNeighbour(directions, row, col, grid)) {
//                 let nRow = neighbour[0]
//                 let nCol = neighbour[1]
                
//                 let current = nRow.toString() + nCol.toString()
//                 if (visited.has(current)) continue
//                 visited.set(current, true)
                
//                 nextLayer.push([nRow, nCol])
//             }
//         }
//         currentLayer = nextLayer
//         nextLayer = []
//         currentDistance++
//     }
//     return -1
// }

//Keeping track of how many cells at each distance are on the queue
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
    
//     let queue = [[0, 0]], visited = new Map(), currentDistance = 1
//     visited.set('00', true)
    
//     while (queue.length) {
//         let nodeAtCurrentDistance = queue.length
//         for (let i = 0; i < nodeAtCurrentDistance; i++) {
//             let cell = queue.shift()
//             let row = cell[0], col = cell[1]
//             if (row === grid.length - 1 && col === grid[0].length - 1) return currentDistance
            
//             for (let neighbour of getNeighbour(directions, row, col, grid)) {
//                 let nRow = neighbour[0]
//                 let nCol = neighbour[1]
                
//                 let current = nRow.toString() + nCol.toString()
//                 if (visited.has(current)) continue
//                 visited.set(current, true)
//                 queue.push([nRow, nCol])
//             }
//         }
//         currentDistance++
//     }
//     return -1
// }