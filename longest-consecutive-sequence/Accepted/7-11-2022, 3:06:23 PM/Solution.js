// https://leetcode.com/problems/longest-consecutive-sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     nums = new Set(nums)
    
//     let longestStreak = 0
    
//     for (let num of nums) {
//         if (!nums.has(num-1)) {
//             let currentNum = num
//             let currentStreak = 1
            
//             while (nums.has(currentNum + 1)) {
//                 currentStreak++
//                 currentNum++
//             }
            
//             longestStreak = Math.max(longestStreak, currentStreak)
//         }
//     }
    
//     return longestStreak
// };

const longestConsecutive = (nums) => {
    nums = new Set(nums)
    let visited = new Set(), longestStreak = 0
    
    for (let num of nums) {
        if (visited.has(num)) continue
        let current = 0, stack = [num]
        
        while (stack.length) {
            let node = stack.pop()
            visited.add(node)
            current++
            
            if (!visited.has(node + 1) && nums.has(node + 1)) stack.push(node + 1)
            if (!visited.has(node - 1) && nums.has(node - 1)) stack.push(node - 1)
        }
        
        longestStreak = Math.max(longestStreak, current)
    }
    return longestStreak
}
