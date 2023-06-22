// https://leetcode.com/problems/the-maze-ii

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
    const N = maze.length, M = maze[0].length
    
    const queue = [[start, 0]]
    
    while (queue.length) {
        const len = queue.length
        
        for (let i = 0; i < len; i++) {
            const [dRow, dCol] = destination
            const current = queue.shift()
            const [row, col] = current[0]
            const distance = current[1]
            
            if (row === dRow && dCol === dCol) return 2*distance
            
            for (const [dx, dy] of directions) {
                let x = row + dx
                let y = col + dy
                
                while (x >= 0 && x < N && y >= 0 && y < M && maze[x][y] !== 1) {
                    x += dx
                    y += dy
                }
                
                x -= dx
                y -= dy
                
                if (maze[x][y] !== 0) continue
                
                queue.push([[x, y], distance + 1])
                maze[x][y] = 2
            }
        }
    }
    return -1
};