// https://leetcode.com/problems/detonate-the-maximum-bombs

/**
 * @param {number[][]} bombs
 * @return {number}
 */
// var maximumDetonation = function(bombs) {
//     let graph = {}, result = 0, visited = new Set()

//     for (let i = 0; i < bombs.length; i++) {
//         for (let j = 0; j < bombs.length; j++) {
//             if (i === j) continue
//             let dx = bombs[i][0] - bombs[j][0]
//             let dy = bombs[i][1] - bombs[j][1]
//             if (bombs[i][2] >= Math.sqrt((dx**2) + (dy**2))) {
//                 graph[i] = [j] || graph[i].push(j)
                 
//             }
//         }
//     }
    
//     const dfs = (node) => {
       
//         console.log(graph)
//         for (let neighbor of graph[node]) {
//             if (!visited.has(neighbor)) {
//                 visited.add(neighbor)
//                 dfs(neighbor)
//             }
            
//         }
//     }

//     for (let i in graph) {
//         dfs(i)
//         result = Math.max(result, visited.size)
//     }

//     return result
    
// };

const maximumDetonation = (bombs) => {
  const dist = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

  const dfs = (i, visited = new Set()) => {
    visited.add(i)
    let count = 1

    for (let j = 0; j < bombs.length; j++) {
      if (visited.has(j)) continue
      const [x1, y1, r1] = bombs[i]
      const [x2, y2] = bombs[j]
      const distance = dist(x1, y1, x2, y2)

      if (distance <= r1) count += dfs(j, visited)
      
    }

    return count
  };

  let maxDetonated = 0
  for (let i = 0; i < bombs.length; i++) {
    maxDetonated = Math.max(maxDetonated, dfs(i))
  }

  return maxDetonated
};


