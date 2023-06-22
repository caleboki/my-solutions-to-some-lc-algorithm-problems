// https://leetcode.com/problems/graph-valid-tree

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    let adjList = {}
    
    const buildGraph = (edges) => {
        for (let edge of edges) {
            let [node, child] = edge
            if (!adjList[node]) adjList[node] = []
            if (!adjList[child]) adjList[child] = []
            adjList[node].push(child)
            adjList[child].push(node)
            
           
        }
    }
    
    buildGraph(edges)
    console.log(adjList)
    
    const dfs = (graph, node, target, visited = new Set()) => {
        
        if (node === target) return true
        visited.add(node)
        
        console.log(node)
        for (let child of graph[node]) {
            if (visited.has(child)) continue
            let isFound = dfs(graph, child, target, visited)
            if (isFound) return true
        }
        return false
        
    }
    
    for (let i = 0; i < n; i++) {
        if (!dfs(adjList, 0, n-1)) return false
    }
    
    return true
    
};