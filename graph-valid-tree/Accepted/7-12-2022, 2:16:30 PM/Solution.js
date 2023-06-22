// https://leetcode.com/problems/graph-valid-tree

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
// const validTree = (n, edges) => {
//     let adjList = {}, visited = new Set(), parent = {}
//     parent[0] = -1 //parent node to detect cycles. Initialized 0 to -1 because 0 node has no parent
    
//     const buildGraph = (edges) => {
//         for (let i = 0; i < n; i++) {
//             adjList[i] = []
//         }
//         for (let edge of edges) {
//             let [node, child] = edge
//             adjList[node].push(child)
//             adjList[child].push(node)
//         }
//     }
//     buildGraph(edges)
    
//     const dfs = (currentNode, parent) => {
//         // mark current node as visited
//         visited.add(currentNode)
        
//         /** explore child nodes via dfs**/
//         for (let child of adjList[currentNode]) {
//             if (visited.has(child)) {
//                 if (child !== parent) return true
//             } else {
//                 if (dfs(child, currentNode)) return true
//             }
//         }
//         return false
//     }
    
//     if (dfs(0, -1)) return false
    
//     /**
//      * do we have unconnected components?
//      * at this point we should have seen all the nodes by DFS traversal
//      * if there are nodes that aren't visited, theres an unconnected component
//      **/
    
//     for (let i = 0; i < n; i++) {
//         if (!visited.has(i)) return false
//     }
    
//     return true
// }

const validTree = (n, edges) => {
    let adjList = {}, visited = new Set()
    
    if (edges.length !== n - 1) return false
    
    const buildGraph = (edges) => {
        for (let i = 0; i < n; i++) adjList[i] = []
        
        for (let edge of edges) {
            let [node, child] = edge
            
            adjList[node].push(child)
            adjList[child].push(node)
        }
    }
    buildGraph(edges)
    
    const dfs = (node) => {
        if (visited.has(node)) return
        visited.add(node)
        
        for (let child of adjList[node]) {
            dfs(child)
        }
    }
    
    dfs(0)
    return visited.size === n
}