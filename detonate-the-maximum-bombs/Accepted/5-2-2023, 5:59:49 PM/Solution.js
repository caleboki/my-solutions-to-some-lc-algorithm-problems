// https://leetcode.com/problems/detonate-the-maximum-bombs

/**
 * @param {number[][]} bombs
 * @return {number}
 */
// const maximumDetonation = (bombs) => {
//   const dist = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

//   const dfs = (i, visited = new Set()) => {
//     visited.add(i)
//     let count = 1

//     for (let j = 0; j < bombs.length; j++) {
//       if (visited.has(j)) continue
//       const [x1, y1, r1] = bombs[i]
//       const [x2, y2] = bombs[j]
//       const distance = dist(x1, y1, x2, y2)

//       if (distance <= r1) count += dfs(j, visited)
//     }
//     return count
//   };

//   let maxDetonated = 0
//   for (let i = 0; i < bombs.length; i++) {
//     maxDetonated = Math.max(maxDetonated, dfs(i))
//   }
//   return maxDetonated
// };

const maximumDetonation = (bombs) => {
    if (bombs.length === 1) return 1
    const dist = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

    const buildGraph = (edges) => {
        let graph = {}
        for (let i = 0; i < edges.length; i++) {
            for (let j = 0; j < edges.length; j++) {
                if (i === j) continue
                if (!(i in graph)) graph[i] = []
                
                let [x1, y1, r1] = edges[i]
                let [x2, y2] = edges[j]
                let distance = dist(x1, y1, x2, y2)
                if (distance <= r1) graph[i].push(j)
            }
        }
        return graph
    }

    const graph = buildGraph(bombs)

    const countDetonations = (graph, node, visited) => {
        let count = 0
        for (let child of graph[node]) {
            if (!visited.has(child)) {
                visited.add(child)
                count += 1 + countDetonations(graph, child, visited)
            }
        }
        return count
    }

    let maxDetonated = 0
    for (let i = 0; i < bombs.length; i++) {
        const visited = new Set([i])
        maxDetonated = Math.max(maxDetonated, 1 + countDetonations(graph, i, visited))
    }
    return maxDetonated
}




