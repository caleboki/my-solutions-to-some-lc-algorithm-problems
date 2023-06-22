// https://leetcode.com/problems/find-the-town-judge

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const buildGraph = () => {
        let adjList = {}
        
        for (let i = 1; i <= n; i++) {
            adjList[i] = []
        }
        
        for (t of trust) {
            let [a, b] = t
            adjList[a].push(b)
        }
        return adjList
    }
    
    const hasPath = (g, src, dst, visited = new Set()) => {
        if (src === dst) return true
        visited.add(src)
        
        for (let neighbor of g[src]) {
            if (visited.has(neighbor)) continue
            visited.add(neighbor)
            let isFound = hasPath(g, neighbor, dst, visited)
            if (isFound) return true
        }
        return false
    }
    
    let graph = buildGraph(), possibleJudge
    
    for (let i = 1; i <= n; i++) {
        if (graph[i].length === 0) possibleJudge = i
    }
    
    if (!possibleJudge) return -1
    
    for (let i = 1; i <=n; i++) {
        if (!hasPath(graph, i, possibleJudge)) return -1
    }
    
    return possibleJudge
    
};