// https://leetcode.com/problems/shortest-path-to-get-food

/**
 * @param {character[][]} grid
 * @return {number}
 */
const getFood = (grid) => {
    if (grid.length === 0) return -1
    
    let minDistance = 0, queue = [], visited = new Set(), rows = grid.length, cols = grid[0].length
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    
    //find starting position
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '*') {
                queue.push([i, j])
                visited.add(`${i}|${j}`)
                break
            }
        }
    }
    
    //start bfs
    
    while (queue.length) {
        let size = queue.length
        
        for (let i = 0; i < size; i++) {
            let [row, col] = queue.shift()
            if (grid[row][col] === '#') return minDistance
            
            for (let d of directions) {
                let nRow = row + d[0]
                let nCol = col + d[1]
                
                if (nRow < 0 || nCol < 0 || nRow >= rows || nCol >= cols || grid[nRow][nCol] === 'X' || visited.has(`${nRow}|${nCol}`)) continue
                
                visited.add(`${nRow}|${nCol}`)
                queue.push([nRow, nCol])
            }
        }
        minDistance++
    }
    
    return -1
}