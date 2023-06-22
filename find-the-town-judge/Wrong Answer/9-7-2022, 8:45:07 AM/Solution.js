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
    
    let graph = buildGraph()
    console.log(graph)
    for (let i = 1; i <= n; i++) {
        if (graph[i].length === 0) return i
    }
    return -1
    
};