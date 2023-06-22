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

var countComponents = function(n, edges) {
    // create visited array
    let visited = [];
    // create graph
    let graph = buildGraph(n, edges);
    // create res
    let res = 0;
    
    // mark visited with false
    for (let i = 0; i < n; i ++) {
        visited.push(false);
    }
    
    // traverse graph
    for (let i = 0; i < n; i ++) {
        // not visited
        if (visited[i] === false) {
            res ++;
            dfs(i, graph, visited);
        }
    }
    return res;
};

const buildGraph = (n, edges) => {
    let graph = Array.from({length: n}, () => []);
    
    for (let edge of edges) {
        let [src, dist] = edge;
        graph[src].push(dist);
        graph[dist].push(src);
    }
    return graph
}

const dfs = (index, graph, visited) => {
    visited[index] = true;
    let nodes = graph[index];
    for (let i = 0; i < nodes.length; i ++) {
        if (visited[nodes[i]] === false) {
            dfs(nodes[i], graph, visited)
        }
    }
}





