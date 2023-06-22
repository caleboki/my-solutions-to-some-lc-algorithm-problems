// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const adjList = new Map()
    let counter = 0
    
    for (let i = 0; i < n; i++) {
        addNode(adjList, i)
    }
    
    for (let i = 0; i < edges.length; i++) {
        addEdges(adjList, edges[i][0], edges[i][1])
    }
    console.log(adjList) 
    
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

function addNode(list, node) {
    list.set(node, [])
    return list
}

function addEdges(list, from, to) {
    list.get(from).push(to)
    list.get(to).push(from)
    return list   
}

// function dfs(list, start, visited = new Set()) {
//     let counter = 0
//     visited.add(start)
//     const edges = list.get(start)
  
//     for (let i = 0; i < edges.length; i++) {
        
//         if (!visited.has(edges[i])) {
//             dfs(list, edges[i], visited)
//         } else {
//             counter++
//         } 
//     }
//     return counter
// }