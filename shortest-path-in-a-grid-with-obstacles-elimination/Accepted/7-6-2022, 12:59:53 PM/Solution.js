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

var shortestPath = function(grid, k) {
    /**
        Concept:
        -- Since we are given a grid of cells and we have to find the shortest path between two cells,
           we can solve this problem using BFS.
        -- The grid may contain many obstacles and there are K obstacles that can be eliminated.
        -- Once we have eliminated K obstacles, there's no path and an alternate path must be considered
        -- Therefore, we must know at each cell we are visiting what value of K we brought to that cell
        -- Also, to avoid getting stuck in a loop of wrong path, we must avoid paths already visited
        
        Approach:
        -- Push a tuple [ row, col, remainingK ] into a queue. Also put combination as seen in a set.
        -- For each tuple that we remove from the queue:
           -- Check if row and col are lower right coordinates. If true, return moves taken so far.
           -- If not true,
              -- Move in each of the four directions from that cell to find its neighbor
              -- Validate the neighbor:
                 -- Check for out of bounds
                 -- Check if neighbor cell has an obstacle and if K is exhausted
              -- If validated, do the following if neighbor is not seen before:
                 -- If not obstacle, add neighbor coordinates and remaining K to queue and set.
                 -- If obstacle, decrement remaining k and add values to queue and set.
    */
    
    // Time Complexity: O(m*n) --> Worst case traversing all cells
    // Space Complexity: O(m*n) --> Worst case storing all cells
    
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length, cols = grid[0].length, directions = [[-1, 0], [1, 0], [0, -1], [0, 1]], visited = new Set()
    
    visited.add(`0-0-${k}`)
    let moves = 0, queue = [[0, 0, k]];// Starting coordinates and k
    
    while (queue.length > 0) {
        let nextMoves = [];
        
        while (queue.length > 0) {
            let [x, y, remainingK] = queue.shift();
            
            if (x === rows - 1 && y === cols - 1) return moves;// Reached destination => return moves
            
            for (const direction of directions) {
                let row = x + direction[0], col = y + direction[1];
                
                // Check for out of bounds or too many obstacles to eliminate
                if (row < 0 || col < 0 || row >= rows || col >= cols ||
                   (grid[row][col] === 1 && remainingK === 0)) continue;
                
                // Consider a decremented k while discovering next 4 neighbors if obstacle
                let newK = grid[row][col] === 1 ? remainingK - 1 : remainingK;
                let key = `${row}-${col}-${newK}`;
                
                if (!visited.has(key)) {
                    visited.add(key);
                    nextMoves.push([row, col, newK]);
                }
            }
        }
        
        queue = nextMoves;
        moves++;
    }
    
    return -1;// return -1 if no path found
};