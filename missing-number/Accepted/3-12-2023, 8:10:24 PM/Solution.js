// https://leetcode.com/problems/missing-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (nums.length === 0) return 1
    nums = new Set(nums)

    for (let i = 0; i < nums.size + 1; i++) {
        if (!nums.has(i)) return i
    }
    
};