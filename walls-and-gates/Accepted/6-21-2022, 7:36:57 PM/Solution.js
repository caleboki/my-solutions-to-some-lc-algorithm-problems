// https://leetcode.com/problems/walls-and-gates

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
// var wallsAndGates = function(rooms) {
    
//     const distanceToNearestGate = (i, j, dist, rooms) => {
        
//         //handling out of bound and base case
//         if (i < 0 || i >= rooms.length || j < 0 || j>=rooms[i].length || rooms[i][j] < dist) return
        
            
//         rooms[i][j] = dist
//         if (rooms[i+1]) distanceToNearestGate(i+1, j, dist+1, rooms)
//         if (rooms[i-1]) distanceToNearestGate(i-1, j, dist+1, rooms)
//         if (rooms[i][j+1]) distanceToNearestGate(i, j+1, dist+1, rooms)
//         if (rooms[i][j-1]) distanceToNearestGate(i, j-1, dist+1, rooms)
//     }
    
//     //traverse grid
//     for (let i = 0; i < rooms.length; i++) {
//         for (let j = 0; j < rooms[i].length; j++) {
//             if (rooms[i][j] === 0) distanceToNearestGate(rooms, i, j, 0)
//         }
//     }
    
//     return rooms
    
// };


// var wallsAndGates = function(rooms) {
//     const distanceToNearestGate = (i, j, dist, rooms) => {
        
//         //handling out of bound and base case
//         if (dist > 0 && rooms[i][j] <= 0) return
        
//         if (dist <= rooms[i][j]) {
//             rooms[i][j] = dist
//         } else {
//             return
//         }
        
//         if (rooms[i-1]) distanceToNearestGate(i-1, j, dist+1, rooms)
        
//         if (rooms[i][j+1]) distanceToNearestGate(i, j+1, dist+1, rooms)
        
//         if (rooms[i+1]) distanceToNearestGate(i+1, j, dist+1, rooms)
        
//         if (rooms[i][j-1]) distanceToNearestGate(i, j-1, dist+1, rooms)
            
//     }
    
//     //traverse grid
//     for (let i = 0; i < rooms.length; i++) {
//         for (let j = 0; j < rooms[i].length; j++) {
//             if (!rooms[i][j]) distanceToNearestGate(i, j, 0, rooms)
//         }
//     }
    
//     return rooms
// };

//See here for some related explanation: https://www.youtube.com/watch?v=yJvA5MNx5LM
var wallsAndGates = function(rooms) {
    let rows = rooms.length,
        cols = rooms[0].length,
        queue = [],
        //      top     down     right   left
        dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    for (let i = 0; i < rows; i ++) {
        for (let j = 0; j < cols; j ++) {
            if (rooms[i][j] == 0) {
                // save gate position
                queue.push([i, j])
            }
        }
    }
    while (queue.length) {
        let curr = queue.shift(),
            currentRow = curr[0],
            currentCol = curr[1];
        
        for (let dir of dirs) {
            
            let newRow = currentRow + dir[0], newCol = currentCol + dir[1];
            
            if (newRow < 0 || newRow > rows - 1 || newCol < 0 || newCol > cols - 1 || rooms[newRow][newCol] !== 2147483647) continue;
            
            rooms[newRow][newCol] = rooms[currentRow][currentCol] + 1;
            queue.push([newRow, newCol])
        }
    }
};