// https://leetcode.com/problems/reconstruct-itinerary

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    //tickets.sort()
    
    const buildGraph = (edges) => {
        const graph = {}
        
        for (let edge of edges) {
            if (!(edge[0] in graph)) graph[edge[0]] = []
            if (!(edge[1] in graph)) graph[edge[1]] = []
            
            graph[edge[0]].push(edge[1])
            //graph[edge[1]].push(edge[0])
        }
        return graph
    }
    
    let graph = buildGraph(tickets), result = []
    
    const dfs = (node) => {
        const destinations = graph[node]
        
        while (destinations.length) {
            dfs(destinations.shift())
        }
        result.unshift(node)
    }
    
    dfs('JFK')
    return result
};