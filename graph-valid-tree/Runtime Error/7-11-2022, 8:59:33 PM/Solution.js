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
            adjList[node].push(child)
            
           
        }
    }
    
    buildGraph(edges)
    console.log(adjList)
    
    const dfs = (graph, node, target, visited = new Set()) => {
        
        if (node === target) return true
        visited.add(node.toString())
        
        console.log(node)
        for (let child of graph[node]) {
            if (visited.has(child.toString())) continue
            let isFound = dfs(graph, child, target, visited)
            if (isFound) return true
        }
        return false
        
    }
    
    if (dfs(adjList, 0, n-1)) return true
    
    return false
    
};