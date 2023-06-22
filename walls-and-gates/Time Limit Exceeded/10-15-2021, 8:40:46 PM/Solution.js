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


var wallsAndGates = function(rooms) {
    for (let i=0; i<rooms.length; i++) {
        for (let j=0; j<rooms[i].length; j++) {
            if (!rooms[i][j]) { DFS(i, j, 0) }
        }
    }
    
    
    function DFS(x, y, count) {
        if (count > 0 && rooms[x][y] <= 0) { return }
        if (count <= rooms[x][y]) { rooms[x][y] = count } 
        else return

        // top
        if (rooms[x-1]) DFS(x-1, y, count+1)
        
        // right
        if (rooms[x][y+1]) DFS(x, y+1, count+1)
        
        // bottom
        if (rooms[x+1]) DFS(x+1, y, count+1)
        
        // left
        if (rooms[x][y-1]) DFS(x, y-1, count+1)
    }
    
    return rooms
};