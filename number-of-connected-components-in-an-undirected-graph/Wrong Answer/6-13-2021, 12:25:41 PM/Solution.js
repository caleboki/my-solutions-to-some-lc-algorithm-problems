// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const adjList = new Map()
    let counter = 0
    
    const addNode = (list, node) => {
        list.set(node, [])
        return list
    }
    
    const addEdges = (list, from, to) => {
        list.get(from).push(to)
        list.get(to).push(from)
        return list    
    }
    
    for (let i = 0; i < n; i++) {
        addNode(adjList, i)
    }
    
    for (let i = 0; i < edges.length; i++) {
        addEdges(adjList, edges[i][0], edges[i][1])
    } 
    
    const dfs = (start, visited = new Set()) => {
        
        visited.add(start)
        const edges = adjList.get(start)
        
        for (let i = 0; i < edges.length; i++) {
        
            if (!visited.has(edges[i])) {
                dfs(edges[i], visited)
            } else {
                counter++
            } 
        }
       
        return counter
        
    }
    return dfs(0)
};

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
    
//     const dfs = (list, start, visited = new Set()) => {
//         visited[start] = 1
//     }
//     return dfs(0)
// };




