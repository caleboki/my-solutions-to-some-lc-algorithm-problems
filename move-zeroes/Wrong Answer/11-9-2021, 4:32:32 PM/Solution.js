// https://leetcode.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.push(nums[i])
            nums.splice(i, 1)
            
        }
        console.log(nums)
    }
    
};