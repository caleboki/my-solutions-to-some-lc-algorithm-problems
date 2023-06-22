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
    parent[0] = -1 //parent node to detect cycles. Initialized 0 to -1 because 0 node has no parent
    
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
    
    const dfs = (currentNode, parent) => {
        // mark current node as visited
        visited.add(currentNode)
        
        /** explore child nodes via dfs**/
        for (let child of adjList[currentNode]) {
            if (visited.has(child)) {
                if (child !== parent) return true
            } else {
                if (dfs(child, currentNode)) return true
            }
        }
        return false
    }
    
    if (dfs(0, -1)) return false
    
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) return false
        
    }
    
    return true
    
}