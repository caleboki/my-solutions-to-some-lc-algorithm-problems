// https://leetcode.com/problems/paint-house

/**
 * @param {number[][]} costs
 * @return {number}
 */
// var minCost = function(costs) {
    
//     if (costs.length === 1) return Math.min(...costs[0])
    
// };

var minCost = function(costs) {
    let result = [0, 0, 0]
    
    for (let cost of costs) {
        let i = cost[0] + Math.min(result[1], result[2])
        let j = cost[1] + Math.min(result[0], result[2])
        let k = cost[2] + Math.min(result[0], result[1])
        
        result = [i, j, k]
    }
    
    return Math.min(...result)
    
};