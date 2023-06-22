// https://leetcode.com/problems/distinct-numbers-in-each-subarray

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var distinctNumbers = function(nums, k) {
//     let result = [], set = new Set()
    
//     for (let i = 0; i < nums.length - k+1; i++) {
        
//         let window = i + k
        
//         for (let j = i; j < window; j++) {
//             set.add(nums[j])
//         }
        
//         result.push(set.size)
//         set = new Set()
        
//     }
//     return result
// };

const distinctNumbers = (nums, k) => {
    let result = [], j = 0, map = new Map()
    
    for (let i = 0; i < nums.length + 1; i++) {
        if (i - j === k) {
            result.push(map.size)
            
            if (map.get(nums[j]) === 1) {
                map.delete(nums[j])
            } else {
                map.set(nums[j], map.get(nums[j]) - 1)
            }
            j++
        }
        
        if (!map.has(nums[i])) map.set(nums[i], 0)
        map.set(nums[i], map.get(nums[i]) + 1)
        
    }
    return result
}

