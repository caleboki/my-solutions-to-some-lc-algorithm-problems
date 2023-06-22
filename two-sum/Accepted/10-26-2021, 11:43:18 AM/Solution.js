// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var pairs = {};
    var len = nums.length;
    
    for (let i = 0; i < len; i++) {
        if (nums[i] in pairs) return [pairs[nums[i]], i];
        
        pairs[target-nums[i]] = i;
    }
};
