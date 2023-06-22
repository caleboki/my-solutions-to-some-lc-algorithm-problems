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
    
    const hasPath = (g, s, e, visited = new Set()) => {
        
        if (s === e) return true
        visited.add(String(s))
        
        for (let neighbor of g.get(s)) {
            if (!visited.has(String(neighbor))) {
                visited.add(String(neighbor))
                let isFound = hasPath(g, neighbor, e, visited)
                if (isFound) return true
            }
        }
        return false
    }
    
    return hasPath(graph, start, end)
};