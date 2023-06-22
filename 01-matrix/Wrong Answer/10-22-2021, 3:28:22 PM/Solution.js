// https://leetcode.com/problems/01-matrix

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    if (!mat || mat.length === 0) return mat
    
    let rows = mat.length, cols = mat[0].length
    let queue = []
    let visited = new Set()
    
    //Put the co-ordinates of all 0s in the queue
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                let zeroNodes = '' + i + j
                queue.push(zeroNodes)
                visited.add(zeroNodes)
            }
        }
    }
    
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
    while (queue.length) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let currentNode = queue.shift()
            
            for (d of directions) {
                let x = +currentNode[0] + d[0]
                let y = +currentNode[1] + d[1]
                
                //check boundaries
                if (x < 0 || x > rows-1 || y < 0 || y > cols-1 || visited.has('' + x + y)) {
                   continue 
                }
                //console.log(mat[x][y])
                mat[x][y] = mat[+currentNode[0]][+currentNode[1]] + 1
                
                queue.push('' + x + y)
                visited.add('' + x + y)
                
                
            }
        }
        
        
    }
    
    return (mat)
};