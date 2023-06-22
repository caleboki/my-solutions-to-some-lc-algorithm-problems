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
            if (i < 0 || i >= rows || j < 0 || j >= cols) continue
            if (!visited.has(i.toString() + j.toString())) {
                visited.add(i.toString() + j.toString())
                let isFound = hasPath(maze, [i, j], destination, visited)
                if (isFound) return true
            }
        }
    }
    
    return false
    
    
    
};