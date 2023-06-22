// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0
    
    let j = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
        }
    }
    return j + 1
    
};