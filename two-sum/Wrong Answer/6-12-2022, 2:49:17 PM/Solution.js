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
        
//         pairs[target - nums[i]] = i
//     }
// }

const twoSum = (nums, target) => {
    let i = 0, j = nums.length - 1
    
    while ((nums[i] + nums[j] !== target) && i < j) {
        if (nums[i] + nums[j] < target) i++
        if (nums[i] + nums[j] > target) j--
        
        if (i === j) return   
    }
    return [i , j]
}




