// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let count = 0, visited = new Set()
    
    const buildGraph = (edges, graph = {}) => {
        for (let stone of stones) {
            let [row, col] = stone
            
            if (!(row in graph)) graph[row] = []
            if (!(col in graph)) graph[col] = []
            
            graph[row].push(col)
            graph[col].push(row)
            
        }
        return graph
    }
    
    let graph = buildGraph(stones)
    
    const dfs = (graph, startNode, visited) => {
        if (visited.has(String(startNode))) return false
        visited.add(String(startNode))
        
        for (let node of graph[startNode]) {
            dfs(graph, node, visited)
        }
        return true
    }
    
    for (let i in graph) {
        if (dfs(graph, i, visited)) count++
    }
    console.log(stones.length)
    console.log(count)
    return stones.length - count
    
};


