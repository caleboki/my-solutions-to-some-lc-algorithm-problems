// https://leetcode.com/problems/the-maze

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
// var hasPath = function(maze, start, destination, visited = new Set()) {
//     let startString = start.join(''), destinationString = destination.join('')
//     if (startString === destinationString) return true
    
//     let rows = maze.length, cols = maze[0].length
    
//     visited.add(startString)
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
            
//             if (!visited.has(i.toString() + j.toString())) {
//                 visited.add(i.toString() + j.toString())
//                 let isFound = hasPath(maze, [i, j], destination, visited)
//                 if (isFound) return true
//             }
//         }
//     }
//     return false
// };



const hasPath = (maze, start, destination) => {
    const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	]
    
    const N = maze.length, M = maze[0].length
    
    const queue = [start]
    let res = []
    while (queue.length) {
        const len = queue.length
        
        for (let i = 0; i < len; i++) {
            const [dRow, dCol] = destination
            const [row, col] = queue.shift()
            
            if (row === dRow && col === dCol) return true
            
            for (const [dx, dy] of directions) {
                let x = row + dx
                let y = col + dy
                
                // keep rolling in the current direction
				// x, y is within bounday and is not a wall
                while (x >= 0 && x < N && y >= 0 && y < M && maze[x][y] !== 1) {
                    x += dx
                    y += dy
                }
                
                // ball will be on the wall, take a step back
                x -= dx
                y -= dy
                
                // if invalid continue
                if (maze[x][y] !== 0) continue
              
                // continue rolling and mark as visited
                queue.push([x, y])
                maze[x][y] = 2
            }
        }
    }
    
    return false
}