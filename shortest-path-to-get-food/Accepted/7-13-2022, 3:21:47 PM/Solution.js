// https://leetcode.com/problems/shortest-path-to-get-food

/**
 * @param {character[][]} grid
 * @return {number}
 */
// var getFood = function(grid) {
//     let minDistance = 0;
//     let queue = []
//     let visited = [];
//     let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
//     let rows = grid.length;
//     let cols = grid[0].length;
    
//     // Array to keep track of which cell has been visited
//     for(let i = 0; i < rows; i++) {
//         visited.push(new Array(cols).fill(false));
//     }
    
//     // Find starting position for our queue
//     for(let i = 0; i < rows; i++) {
//         for(let j = 0; j < cols; j++) {
//             if(grid[i][j] === '*') {
//                 queue.push([i, j]);
//                 visited[i][j] = true;
//                 break;
//             }
//         }
//     }
    
//     while(queue.length) {
//         // All cells within the size will be at the same distance from starting cell
//         let size = queue.length;
        
//         for(let i = 0; i < size; i++) {
//           let cell = queue.shift();
          
//           // We find the closest food cell since we are doing BFS
//           if(grid[cell[0]][cell[1]] === '#') return minDistance;
        
//           for(let dir of dirs) {
//             let row = cell[0] + dir[0];
//             let col = cell[1] + dir[1];
            
//             // Skip visited cell and out of bound cell and obstacle cell  
//             if(row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'X' || visited[row][col]) continue;
            
//             // Add unvisited cell to the queue  
//             visited[row][col] = true;
//             queue.push([row, col]);
//           }  
//         }
        
//         // We finish all cell at the current distance and going to look for cells at next distance
//         minDistance++;
//     }
    
//     return -1;
// };

const getFood = (grid) => {
    if (grid.length === 0) return -1
    
    let minDistance = 0, queue = [], visited = new Set(), rows = grid.length, cols = grid[0].length
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    
    //find starting position
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '*') {
                queue.push([i, j])
                visited.add(`${i}|${j}`)
                break
            }
        }
    }
    
    //start bfs
    
    while (queue.length) {
        //All cells within the size will be at the same distance from starting cell
        let size = queue.length
        
        for (let i = 0; i < size; i++) {
            let [row, col] = queue.shift()
            if (grid[row][col] === '#') return minDistance
            
            for (let d of directions) {
                let nRow = row + d[0]
                let nCol = col + d[1]
                
                //Skip visited cell and out of bound cell and obstacle cell
                if (nRow < 0 || nCol < 0 || nRow >= rows || nCol >= cols || grid[nRow][nCol] === 'X' || visited.has(`${nRow}|${nCol}`)) continue

                //Add unvisited cell to the queue  
                visited.add(`${nRow}|${nCol}`)
                queue.push([nRow, nCol])
            }
        }
        minDistance++
    }
    
    return -1
}