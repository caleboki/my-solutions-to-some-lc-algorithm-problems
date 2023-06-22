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
    
    const dfs = (graph, node, visited = new Set()) => {
        if (visited.has(node)) return false
        visited.add(node)
        
        for (let child of graph[node]) {
            dfs(graph, child, visited)
        }
        return true
    }
    
    for (let i = 0; i < n; i++) {
        if (!dfs(adjList, i)) return false
    }
    
    return true
    
};