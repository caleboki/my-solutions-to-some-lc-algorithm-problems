// https://leetcode.com/problems/the-maze-ii

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
// var shortestDistance = function(maze, start, destination) {
//     const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
//     const N = maze.length, M = maze[0].length
    
//     const queue = [[start, 0]]
    
//     while (queue.length) {
//         const len = queue.length
        
//         for (let i = 0; i < len; i++) {
//             const [dRow, dCol] = destination
//             const current = queue.shift()
//             const [row, col] = current[0]
//             let distance = current[1]
            
//             if (row === dRow && dCol === dCol) return 2*distance
            
//             for (const [dx, dy] of directions) {
//                 let x = row + dx
//                 let y = col + dy
                
//                 while (x >= 0 && x < N && y >= 0 && y < M && maze[x][y] !== 1) {
//                     x += dx
//                     y += dy
//                 }
                
//                 x -= dx
//                 y -= dy
//                 distance--
                
//                 if (maze[x][y] !== 0) continue
                
//                 queue.push([[x, y], distance + 1])
//                 maze[x][y] = 2
//             }
//         }
//     }
//     return -1
// };

// const shortestDistance = (maze, start, destination) => {
//     const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]
//     const visited = new Map()
    
//     const N = maze.length, M = maze[0].length
//     const queue = [[start[0], start[1], 0]]
    
//     const result = []
    
//     while (queue.length) {
//         const [row, col, posIdx] = queue.shift()
        
//         for (let [dx, dy] of directions) {
//             let [x, y, pos] = [row, col, posIdx] //copy, so as not to modify original above
            
//             while (x >= 0 && x < N && y >= 0 && y < M && maze[x][y] !== 1 ) {
//                 x += dx
//                 y += dy
//                 pos++
//             }
            
//             x -= dx
//             y -= dy
//             pos--
            
//             if (maze[x][y] === 1) continue
            
//             if (visited.has(x.toString() + y.toString()) && visited.get(x.toString() + y.toString()) <= pos) {
//                 continue
//             }
            
//             visited.set(x.toString() + y.toString(), pos)
            
            
//             if (x === destination[0] && y === destination[1]) {
//                 result.push(pos)
//                 break
//             }
//             queue.push([x, y, pos])
//         }
//     }
    
//     if (result.length) return Math.min(...result)
//     return -1
// }

var shortestDistance = function(m, s, d) {
  const dir = [[1,0], [-1,0], [0,1], [0,-1]]
  const map = new Map()
  const q = [[s[0], s[1], 0]] //position 0
  const res = []
  while(q.length){
    const [row, col, posIdx] = q.shift()    
    for(let [x,y] of dir){
      let [r,c,pos] = [row, col, posIdx] // initial copy, lets no modify the original values
      while(r>=0 && r<m.length && c>=0 && c<m[r].length && m[r][c]!==1){ 
        r+=y
        c+=x
        pos++
      }      
      // go back one
      r-=y
      c-=x
      pos--
      
      if(m[r][c] === 1) continue
      if(map.has(`r${r}+c${c}`) && map.get(`r${r}+c${c}`) <= pos ) continue
      map.set(`r${r}+c${c}`, pos)
      if(r === d[0] && c === d[1]){
        res.push(pos)
        break
      }      
      q.push([r,c,pos])
    }      
  }
  if(res.length) return Math.min(...res)
  return -1
};