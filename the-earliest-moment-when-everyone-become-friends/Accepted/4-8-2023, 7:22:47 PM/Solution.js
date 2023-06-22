// https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends

/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
// var earliestAcq = function(logs, n) {
//     logs.sort(function (a, b) {return a[0] - b[0]})
    
//     const buildGraph = (edges) => {
//         const graph = {}

//         for (let edge of edges) {
//             const [a, b, c] = edge
//             if (!(b in graph)) graph[b] = []
//             if (!(c in graph)) graph[c] = []
//             graph[b].push(c)
//             graph[c].push(b)
//         }
//         return graph
//     }

//     const graph = buildGraph(logs)
//     console.log(graph)

//     for (let i = 0; i < n; i++) {

//     }
// };

const earliestAcq = (logs, n) => {
    logs.sort((a, b) => a[0] - b[0])

    const graph = {}

    for (let i = 0; i < n; i++) {
        graph[i] = new Set([i])
    }

    for (let [ts, p1, p2] of logs) {
        const set1 = graph[p1]
        const set2 = graph[p2]

        for (let p of set2) {
            set1.add(p)
            graph[p] = set1
        }

        if (set1.size === n) return ts
    }

    return -1
}
