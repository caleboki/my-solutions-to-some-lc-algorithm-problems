// https://leetcode.com/problems/redundant-connection

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
//First, we loop through the edges to build an adjacency list using a map of sets (key is the node, value is the set of adjacent nodes). Then, we remove one edge and try to perform dfs on the map. If we are still able to reach all of our nodes, then we know that that edge was redundant. If we are not able to reach all the nodes, then we know that that edge was not redunant and we try again with a different edge. Since the question asks for the last occuring redundant edge, we start searching backwards from the end and return the first one that we find. Of course, this is O(n^2) time still as we are searching through the map of N nodes once for every edge.
var findRedundantConnection = function(edges) {
    const map = {};
    
    for(let [u, v] of edges) {
        if(!(u in map)) map[u] = new Set([v]);
        if(!(v in map)) map[v] = new Set([u]);
        map[u].add(v);
        map[v].add(u);
    }
    
    for(let i = edges.length - 1; i >= 0; i--) {
        const u = edges[i][0];
        const v = edges[i][1];
        map[u].delete(v);
        map[v].delete(u);
        
        let stack = [u];
        let visited = new Set();
        while(stack.length) {
            const curNode = stack.pop();
            visited.add(curNode);
            for(let neighbor of map[curNode]) {
                if(!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
        if(visited.size == Object.keys(map).length) {
            return edges[i];
        } 
                
        map[u].add(v);
        map[v].add(u);
    }
};