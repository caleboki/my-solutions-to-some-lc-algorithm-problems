// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// var countComponents = function(n, edges) {
//     const adjList = new Map()
//     let counter = 0
    
//     const addNode = (list, node) => {
//         list.set(node, [])
//         return list
//     }
    
//     const addEdges = (list, from, to) => {
//         list.get(from).push(to)
//         list.get(to).push(from)
//         return list    
//     }
    
//     for (let i = 0; i < n; i++) {
//         addNode(adjList, i)
//     }
    
//     for (let i = 0; i < edges.length; i++) {
//         addEdges(adjList, edges[i][0], edges[i][1])
//     }
    
//     const dfs = (start, visited = new Set()) => {
        
//         visited.add(start)
//         const edges = adjList.get(start)
        
//         for (let i = 0; i < edges.length; i++) {
        
//             if (!visited.has(edges[i])) {
//                 dfs(edges[i], visited)
//             } else {
//                 counter++
//             } 
//         }
       
//         return counter
//     }
//     return dfs(0)
// };

// var countComponents = function(n, edges) {
//     let adjList = new Map(), counter = 0, visited = new Set()
    
//     const addNode = (list, node) => {
//         list.set(node, [])
//         return list
//     }
    
//     const addEdges = (list, from, to) => {
//         list.get(from).push(to)
//         list.get(to).push(from)
//         return list    
//     }
    
//     for (let i = 0; i < n; i++) {
//         addNode(adjList, i)
//     }
    
//     for (let i = 0; i < edges.length; i++) {
//         addEdges(adjList, edges[i][0], edges[i][1])
//     }
    
//     const dfs = (node) => {
//         for (let neighbour of adjList.get(node)) {
//             if(!visited.has(neighbour)) {
//                 visited.add(neighbour)
//                 dfs(neighbour)
//             }
//         }
//     }
    
//     for (let i = 0; i < n; i++) {
//         if (!visited.has(i) ){
//             counter++
//             dfs(i)
//         }
//     }
//     return counter
// };

const countComponents = (n, edges) => {
    let count = 0, visited = new Set()
    
    const buildGraph = (edges) => {
        let map = new Map()
        
        for (let edge of edges) {
            let [parent, child] = edge
            
            if (!map.has(parent)) map.set(parent, [])
            if (!map.has(child)) map.set(child, [])
            map.get(parent).push(child)
            map.get(child).push(parent)
        }
        return map
    }
    
    let graph = buildGraph(edges)
    
    const dfs = (graph, start, visited) => {
        if (visited.has(String(start))) return false
        visited.add(String(start))
        
        let children = graph.get(start)
        
        for (let child of children) {
            dfs(graph, child, visited)
        }
        
        return true
    }
 
    for (let i of graph.keys()) {
        if (dfs(graph, i, visited)) count++
    }
    
    return count
    
}








