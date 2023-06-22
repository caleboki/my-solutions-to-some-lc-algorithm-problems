// https://leetcode.com/problems/graph-valid-tree

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
// var validTree = function(n, edges) {
//     let adjList = {}
    
//     const buildGraph = (edges) => {
//         for (let i = 0; i < n; i++) adjList[i] = []
        
//         for (let edge of edges) {
//             let [node, child] = edge
//             adjList[node].push(child)
//         }
//     }
    
//     const dfs = (node, visited = new Set()) => {
//         if (visited.has(node)) return false
//         if (!adjList[node].length) return true
        
//         visited.add(node)
        
//         for (let child of adjList[node]) {
//             if (!dfs(child, visited)) return false
//         }
//         visited.delete(node)
//         adjList[node] = []
//         return true
        
//     }
    
//     buildGraph(edges)
//     console.log(adjList)
    
//     for (let i = 0; i < n; i++) {
//         if (!dfs(i)) return false
//     }
//     return true
// };

const validTree = (n, edges) => {
    let adjList = {}, visited = new Set(), parent = {}
    parent[0] = -1
    
    const buildGraph = (edges) => {
        for (let i = 0; i < n; i++) {
            adjList[i] = []
        }
        for (let edge of edges) {
            let [node, child] = edge
            adjList[node].push(child)
            adjList[child].push(node)
        }
    }
    buildGraph(edges)
    console.log(adjList)
    
    const dfs = (startNode) => {
        let stack = [startNode]
        
        while (stack.length > 0) {
            let node = stack.pop()
            
            for (let child of adjList[node]) {
                if (parent[node] === child) continue
                
                if (child in parent) return false
                
                parent[child] = node
                stack.push(child)
                
            }
        }
    }
    
    dfs(0)
    
    return Object.keys(parent).length === n
    
}