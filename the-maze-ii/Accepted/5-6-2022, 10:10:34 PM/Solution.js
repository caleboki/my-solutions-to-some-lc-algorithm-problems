// https://leetcode.com/problems/the-maze-ii

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */

const shortestDistance = (maze, start, destination) => {
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    const visited = new Map()
    
    const N = maze.length, M = maze[0].length
    const queue = [[start[0], start[1], 0]]
    
    const result = []
    
    while (queue.length) {
        const [row, col, posIdx] = queue.shift()
        
        for (let [x, y] of directions) {
            let [r, c, pos] = [row, col, posIdx] //copy, so as not to modify original above
            
            while (r >= 0 && r < N && c >= 0 && c < M && maze[r][c] !== 1 ) {
                r += x
                c += y
                pos++
            }
            
            r -= x
            c -= y
            pos--
            
            if (maze[r][c] === 1) continue
            
            if (visited.has(`r${r}+c${c}`) && visited.get(`r${r}+c${c}`) <= pos) {
                continue
            }
            
            visited.set(`r${r}+c${c}`, pos)
            
            
            if (r === destination[0] && c === destination[1]) {
                result.push(pos)
                break
            }
            queue.push([r, c, pos])
        }
    }
    
    if (result.length) return Math.min(...result)
    return -1
}

