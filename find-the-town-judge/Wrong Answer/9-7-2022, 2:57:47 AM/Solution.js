// https://leetcode.com/problems/find-the-town-judge

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const buildGraph = () => {
        let adjList = {}
        
        for (t of trust) {
            let [a, b] = t
            if (!adjList[a]) adjList[a] = []
            adjList[a].push(b)
        }
        
        return adjList
    }
    
    let graph = buildGraph()
    
    for (let i = 1; i <= n; i++) {
        if (!(i in graph) ) return i
    }
    return -1
    
};