// https://leetcode.com/problems/frog-jump

/**
 * @param {number[]} stones
 * @return {boolean}
 */
// var canCross = function(stones) {
    
//     const dfs = (stones, index, k) => {
        
//         for (let i = index + 1; i < stones.length; i++) {
//             let gap = stones[i] - stones[index]
            
//             if (gap >= k - 1 && gap <= k + 1) {
//                 if (dfs(stones, i, gap)) return true
//             }
//         }
//         return index === stones.length - 1
//     }
//     return dfs(stones, 0, 0)
// };


const canCross = (stones) => {
    let visited = new Set(), stonesSet = new Set(stones), end = stones[stones.length - 1], stack = [[0, 0]]
    
    while (stack.length) {
        let [current, steps] = stack.pop(), key = current + ',' + steps
        
        if (visited.has(key)) continue
        visited.add(key)
        
        if (current === end) return true
        
        if (current < end) {
            for (let i = steps - 1; i < steps + 2; i++) {
                if (stonesSet.has(current + i)) stack.push([current + i, i])
            }
        }
    }
    
    return false
}

// const canCross = (stones) => {
//     let stonesSet = new Set(stones), end = stones[stones.length - 1], visited = new Set()
    
//     const dfs = (stonesSet, current, k) => {
//         if (current === end) return true
//         let key = current + ',' + k
        
//         if (!visited.has(key)) {
//             visited.add(key)
            
//             if (current === end) return true
            
//             if (current < end) {
//                 for (let i = k - 1; i < k + 2; i++) {
//                     if (stonesSet.has(current + i)) dfs(stonesSet, current + i, k)
//                 }
//             }
            
//         }
        
//         //return false
//     }
    
//     return dfs(stonesSet, 0, 0)
// }

