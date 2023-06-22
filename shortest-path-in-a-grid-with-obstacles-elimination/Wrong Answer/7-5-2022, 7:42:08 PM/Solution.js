// https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
// var shortestPath = function(grid, k) {
//     let directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]
//     const getNeigbours = (directions, row, col, grid) => {
//         let neigbours = []
//         for (let d of directions) {
//             let nRow = row + d[0]
//             let nCol = col + d[1]
            
//             if (nRow < 0 || nCol < 0 || nRow >= grid.length || nCol >= grid[0].length) {
//                 continue
//             }
//             if (grid[nRow][nCol] !== 0) {
//                 if (k === 0) continue
//                 k--
//             }
//             neigbours.push([nRow, nCol])
//         }
//         return neigbours
//     }
    
//     const bfs = (grid) => {
//         let queue = [[0, 0, 0]], visited = new Set('00')
//         while (queue.length) {
//             let cell = queue.shift()
//             let [row, col, distance, k] = cell
//             if (row === grid.length - 1 && col === grid[0].length - 1) return distance
//             for (let neigbour of getNeigbours(directions, row, col, grid)) {
//                 let [nRow, nCol] = neigbour
//                 let current = nRow.toString() + nCol.toString()
//                 if (visited.has(current)) continue
//                 visited.add(current)
//                 queue.push([nRow, nCol, distance + 1])
//             }
//         }
//         return -1
//     }
//     return bfs(grid)
// };

// const shortestPath = (grid, k) => {
//     let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    
//     const getNeigbours = (directions, row, col, grid) => {
//         let neigbours = []
        
//         for (let d of directions) {
//             let nRow = d[0] + row
//             let nCol = d[1] + col
            
//             if (nRow < 0 || nCol < 0 || nRow >= grid.length || nCol >= grid[0].length) continue
//         }
        
//         return neigbours
//     }
    
//     const bfs = (grid, k) => {
//         let queue = [[0, 0, 0, k]], visited = new Map()
        
//         while (queue.length) {
//             let [row, col, distance, left] = queue.shift()
            
//             if (row === grid.length - 1 && col === grid[0].length - 1) return distance
//             if (visited.has(`${row}${col}${left}`) || left < 0) continue
            
//             visited.set(`${row}${col}${left}`, true)
            
//             if (grid[row][col] === 1) left--
            
//             for (let neigbour of getNeigbours(directions, row, col, grid)) {
//                 let [nRow, nCol] = neigbour
//                 queue.push([nRow, nCol, distance + 1, left]) 
//             }
//         }
        
//         return -1
//     }
    
//     return bfs(grid, k)
// }

var shortestPath = function(grid, k) {
      const queue = [ [0, 0, 0] ];
      const visited = new Set([ 0 + ',' + 0 ]);
     const rows = grid.length, cols = grid[0].length;
    
      while (queue.length > 0) {
        const [ row, col, distance ] = queue.shift();
    
        if (row === rows - 1 && col === cols - 1) return distance;

        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let delta of deltas)  {
          const [deltaRow, deltaCol] = delta;
          const neighborRow = row + deltaRow;
          const neighborCol = col + deltaCol;
          const neighborPos = neighborRow + ',' + neighborCol;
          const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
          const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
          if (rowInbounds && colInbounds && !visited.has(neighborPos) && grid[neighborRow][neighborCol] !== 'X') {
            visited.add(neighborPos);
            queue.push([ neighborRow, neighborCol, distance + 1 ]);
          }
        }
      }

      return -1;
};