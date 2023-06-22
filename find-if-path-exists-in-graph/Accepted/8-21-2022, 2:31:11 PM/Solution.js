// https://leetcode.com/problems/find-if-path-exists-in-graph

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    const buildGraph = (edges) => {
        let graph = new Map()
        
        for (let edge of edges) {
            const [a, b] = edge
            if (!graph.has(a)) graph.set(a, [])
            if (!graph.has(b)) graph.set(b, [])
            
            graph.get(a).push(b)
            graph.get(b).push(a)
        }
        
        return graph
    }
    
    let graph = buildGraph(edges)
    
//Depth first search
//     const hasPath = (g, s, e, visited = new Set()) => {
        
//         if (s === e) return true
//         visited.add(String(s))
        
//         for (let neighbor of g.get(s)) {
//             if (visited.has(String(neighbor))) continue
            
//             visited.add(String(neighbor))
//             let isFound = hasPath(g, neighbor, e, visited)
//             if (isFound) return true
//         }
//         return false
//     }
    
//Breadth first search
    const hasPath2 = (g, s, e, visited = new Set()) => {
        let queue = [s]
        
        while (queue.length) {
            let current = queue.shift()
            if (current === e) return true
            if (visited.has(String(current))) continue
            visited.add(String(current))
            for (let neighbor of g.get(current)) {
                queue.push(neighbor)
            }
        }
        return false
    }
    
    return hasPath2(graph, start, end)
};