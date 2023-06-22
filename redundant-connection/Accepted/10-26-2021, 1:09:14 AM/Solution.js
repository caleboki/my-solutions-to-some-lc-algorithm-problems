// https://leetcode.com/problems/redundant-connection

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
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