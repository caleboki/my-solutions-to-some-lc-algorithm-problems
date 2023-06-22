// https://leetcode.com/problems/rotting-oranges

/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
    let fresh = new Set()
    let rotten = new Set()
    let rows = grid.length
    let cols = grid[0].length
    
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                fresh.add("" + i + j)
            } else if (grid[i][j] === 2) {
                rotten.add("" + i + j)
            } 
        }
    }
    let minutes = 0
    let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    
    while(fresh.size > 0) {
        let infected = new Set()
        let rottenArray = Array.from(rotten)
        for(s of rottenArray) {
            let i = parseInt(s[0]) 
            let j = parseInt(s[1])
            
            
            for (d of directions) {
                let nextI = i + d[0]
                let nextJ = j + d[1]
                
                if (fresh.has("" + nextI + nextJ)) {
                    fresh.delete("" + nextI + nextJ)
                    infected.add("" + nextI + nextJ)
                }
            }
        }
        
        if (infected.size === 0) return -1
        
        rotten = infected
        minutes++
    }
    return minutes
}

