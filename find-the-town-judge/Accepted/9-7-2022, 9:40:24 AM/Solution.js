// https://leetcode.com/problems/find-the-town-judge

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// var findJudge = function(n, trust) {
//     const buildGraph = () => {
//         let adjList = {}
        
//         for (let i = 1; i <= n; i++) {
//             adjList[i] = []
//         }
        
//         for (t of trust) {
//             let [a, b] = t
//             adjList[a].push(b)
//         }
//         return adjList
//     }
    
//     let graph = buildGraph(), possibleJudge
    
//     for (let i = 1; i <= n; i++) {
//         if (graph[i].length === 0) possibleJudge = i
//     }
    
//     if (!possibleJudge) return -1
    
//     for (let i = 1; i <=n; i++) {
//         if (!graph[i].includes(possibleJudge) && i !== n) return -1
//     }
    
//     return possibleJudge
// };

const findJudge = (n, trust) => {
    if (n === 1) return 1
    
    const trusted = {}, whoTrusts = new Set()
    
    for (let i = 0; i < trust.length; i++) {
        trusted[trust[i][1]] = trusted[trust[i][1]] + 1 || 1
        whoTrusts.add(trust[i][0])
    }
    
    for (let i = 1; i <= n; i++) {
        if (trusted[i] === n - 1 && !whoTrusts.has(i)) return i
    }
    
    return -1
}