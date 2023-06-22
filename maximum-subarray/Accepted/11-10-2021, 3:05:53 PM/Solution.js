// https://leetcode.com/problems/maximum-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    if (nums.length === 1) return nums[0];
    if (nums.length === 0) return [];
    let current = nums[0];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        current = Math.max(num, current + num);
        max = Math.max(max, current);
    }
    
    return max;
    
};