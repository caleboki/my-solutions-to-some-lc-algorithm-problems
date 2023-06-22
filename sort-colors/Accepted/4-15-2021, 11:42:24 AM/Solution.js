// https://leetcode.com/problems/sort-colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 0) return [];
    
    nums.sort(function(a, b) {return a - b})
    return nums;
};