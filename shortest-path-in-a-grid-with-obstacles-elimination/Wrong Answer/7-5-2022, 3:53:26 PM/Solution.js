// https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    
    const getNeigbours = (directions, row, col, grid) => {
        let neigbours = []
        
        for (let d of directions) {
            let nRow = row + d[0]
            let nCol = col + d[1]
            
            if (nRow < 0 || nCol < 0 || nRow >= grid.length || nCol >= grid[0].length) {
                continue
            }
            
            if (grid[nRow][nCol] !== 0) {
                if (k === 0) continue
                k--
            }
            
            neigbours.push([nRow, nCol])
        }
        return neigbours
    }
    
    const bfs = (grid) => {
        
        let queue = [[0, 0, 0]], visited = new Set('00')
        
        while (queue.length) {
            let cell = queue.shift()
            let [row, col, distance] = cell
            
            if (row === grid.length - 1 && col === grid[0].length - 1) return distance
            
            for (let neigbour of getNeigbours(directions, row, col, grid)) {
                let [nRow, nCol] = neigbour
                
                let current = nRow.toString() + nCol.toString()
                if (visited.has(current)) continue
                visited.add(current)
                
                queue.push([nRow, nCol, distance + 1])
            }
        }
        
        return -1
        
    }
    
    return bfs(grid)
    
};