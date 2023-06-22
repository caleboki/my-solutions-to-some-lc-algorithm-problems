// https://leetcode.com/problems/the-maze

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination, visited = new Set()) {
    let startString = start.join(''), destinationString = destination.join('')
    if (startString === destinationString) return true
    
    let rows = maze.length, cols = maze[0].length
    
    visited.add(startString)
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            
            if (!visited.has(i.toString() + j.toString())) {
                visited.add(i.toString() + j.toString())
                let isFound = hasPath(maze, [i, j], destination, visited)
                if (isFound) return true
            }
        }
    }
    return false
};

// const hasPath = (maze, start, destination) => {
//     const dfs = (maze, start, destination, visited = []) => {
//         if (visited[start[0]][start[1]]) return false
//         if (start[0] === destination[0] && start[1] === destination[1]) return true
        
//         visited[start[0]][start[1]] = true
        
//         let right = start[1] + 1, left = start[1] - 1, up = start[0] - 1, down = start[0] + 1
//         let rows = maze.length, cols = maze[0].length
        
//         while (right < cols && maze[start[0]][right] === 0) right++
//         if (dfs(maze, [start[0], right-1], destination, visited)) return true
        
//         while (left >= 0 && maze[start[0]][left] === 0) left--
//         if (dfs(maze, [start[0], left + 1]), destination, visited) return true
        
//         while (up >= 0 && maze[up][start[1]] === 0) up--
//         if (dfs(maze, [up + 1, start[1]], destination, visited)) return true
        
//         while (down < maze.length && maze[down][start[1]] === 0) d++
//         if (dfs(maze, [down - 1, start[1]], destination, visited)) return true
        
//         return false
//     }
    
//     return dfs(maze, start, destination)
// }