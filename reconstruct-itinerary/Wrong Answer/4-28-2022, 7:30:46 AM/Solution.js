// https://leetcode.com/problems/reconstruct-itinerary

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    
    const buildGraph = (edges) => {
        const graph = {}
        
        for (let edge of edges) {
            if (!(edge[0] in graph)) graph[edge[0]] = []
            if (!(edge[1] in graph)) graph[edge[1]] = []
            
            graph[edge[0]].push(edge[1])
            graph[edge[1]].push(edge[0])
        }
        
        return graph
    }
    
    let graph = buildGraph(tickets), result = ['JFK']
    for (a in graph) graph[a].sort()
    console.log(graph)
    const dfs = (start, graph, visited = new Set()) => {
        visited.add(start)
        
        const destinations = graph[start]
        for (let destination of destinations) {
            if (!visited.has(destination)) result.push(destination)
            
            if (!visited.has(destination)) dfs(destination, graph, visited) 
        }
        
    }
    
//     const bfs = (start) => {
//         const queue = [start]
//         const visited = new Set()
        
//         while (queue.length > 0) {
//             const airport = queue.shift()
//             const destinations = graph[airport]
            
//             for (let destination of destinations) {
//                 if (destination === 'JFK') result.push()
//             }
//         }
//     }
    
    
    dfs('JFK', graph)
    return result
    
};