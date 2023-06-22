// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     const pairs = {}, len = nums.length
    
//     for (let i = 0; i < len; i++) {
//         if (nums[i] in pairs) return [pairs[nums[i]], i]
        
//         pairs[target-nums[i]] = i
//     }
// };

// const twoSum = (nums, target) => {
//     const pairs = {}
    
//     for (let i in nums) {
//         if (nums[i] in pairs) return [pairs[nums[i]], i]
//         let key = target - nums[i]
//         pairs[key] = i
//     }
// }


const twoSum = (nums, target) => {
    const pairs = new Map()
    
    for (let i in nums) {
        if (pairs.has(nums[i])) return [pairs.get(nums[i]), i]
        let key = target - nums[i]
        pairs.set(key, i)
    }
}





