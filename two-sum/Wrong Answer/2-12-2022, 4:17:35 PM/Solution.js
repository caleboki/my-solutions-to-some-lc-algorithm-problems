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

var twoSum = function(nums, target) {
    let len = nums.length
    
    for (let i = 0; i < len; i++) {
        let diff = target - nums[i]
        
        for (let j = 0; j < len; j++) {
            if (diff === nums[j]) return [j, i]
        }
    }
};
