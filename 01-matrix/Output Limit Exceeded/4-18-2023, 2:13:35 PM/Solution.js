// https://leetcode.com/problems/01-matrix

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// var updateMatrix = function(mat) {
//     if (!mat || mat.length === 0) return mat
    
//     let rows = mat.length, cols = mat[0].length
//     let queue = []
//     let visited = new Set()
    
//     //Put the co-ordinates of all 0s in the queue
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (mat[i][j] === 0) {
//                 let zeroNodes = '' + i + j
//                 queue.push(zeroNodes)
//                 visited.add(zeroNodes)
//             }
//         }
//     }
    
//     let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
//     while (queue.length) {
//         let length = queue.length
//         for (let i = 0; i < length; i++) {
//             let currentNode = queue.shift()
//             let currentX = currentNode[0], currentY = currentNode[1]
            
//             for (d of directions) {
//                 let x = +currentX + d[0]
//                 let y = +currentY + d[1]
                
//                 //check boundaries
//                 if (x < 0 || x > rows-1 || y < 0 || y > cols-1 || visited.has('' + x + y)) {
//                    continue 
//                 }
//                 //console.log(mat[x][y])
//                 mat[x][y] = mat[+currentX][+currentY] + 1
                
//                 queue.push('' + x + y)
//                 visited.add('' + x + y)
                
                
//             }
//         }
        
//     }
    
//     return (mat)
// };

// var updateMatrix = function(matrix) {
    
//     // General approach is: Loop over the full matrix to find all zeroes first.
//     // Add those to a queue and start a classic BFS, writing down a number +1 
//     // of the position we find in the Q. That way, all the neigbors of the zeroes will become 1's
//     // all their neighbors 2's etc.
//     // As we're looking for the initial set of zeroes, mark the others, mark as infinity
//     // because we don't want to get confused with future 1s we want to write down.
   
//     let rows = matrix.length, cols = matrix[0].length
    
//     let queue = [];        
    
//     // Find all zeroes in the matrix
//     for (let i = 0; i < rows; i++) { 
//         for (let j = 0; j < cols; j++) {   
//             if (matrix[i][j] === 0) {
//                 // Note the third param here, a zero to keep track of which "level" we're at. 
//                 // The zeroes are obviously at zero. 
//                 // Later in the bfs we will increase this for each unvisited neighbor
//                 queue.push([i, j, 0]);
//             } else {
//                 matrix[i][j] = Infinity;
//             }  
//         } 
//     }
    
//     // little helper array to find neighbors in a quick forEach loop.
//     let dir = [[1,0],[0,1],[-1,0],[0,-1]];
    
//     // Start BFS. BFS is the right choice so we minimize attempted double visits
//     // BFS is like a stain that spreads, while DFS is like tendrils reaching out.
//     while (queue.length) {
//         let pos = queue.shift();
        
//         // write value if we find it's lower than current (like those infinities)
//         if (matrix[pos[0]][pos[1]] > pos[2]) matrix[pos[0]][pos[1]] = pos[2]
        
//         // Look at all neighbor positions. Are they on the board? Are they not yet visited?
//         // If yes to both, add to the q, with an increased "level" param at pos [2] 
//         dir.forEach(function(d) {
//             let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];
//             // valid next coordinates?
//             if (next[0] > -1 && next[0] < matrix.length && next[1] > -1 && next[1] < matrix[0].length) {
//                 // not yet marked?
//                 if (matrix[next[0]][next[1]] === Infinity) {
//                     // add to queue, but with increased index, which we stored at pos[2]
//                     queue.push(next);
//                 }
//             }
//         });
//     }
//     return matrix;
// };

var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const dist = Array.from({length: m}, () => Array(n).fill(Infinity));
    const queue = [];
    console.log(dist)
    
    // Initialize distance of 0 cells to 0 and add them to the queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0;
                queue.push([i, j]);
                console.log(dist)
            }
        }
    }
    
    while (queue.length) {
        const [i, j] = queue.shift();
        
        for (const [dx, dy] of dirs) {
            const ni = i + dx;
            const nj = j + dy;
            
            // If neighbor is within bounds and distance is greater than current cell distance + 1, update distance and add to queue
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && dist[ni][nj] > dist[i][j] + 1) {
                dist[ni][nj] = dist[i][j] + 1;
                queue.push([ni, nj]);
            }
        }
    }
    
    return dist;
};
