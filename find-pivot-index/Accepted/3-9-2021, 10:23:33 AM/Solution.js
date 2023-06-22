// https://leetcode.com/problems/find-pivot-index

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0;
    let left = 0;
    
    for (let i = 0; i<nums.length; i++) {
        total += nums[i];
    }
    
    for (let i = 0; i<nums.length; i++) {
        if (i != 0) {
            left += nums[i-1];
        }
        if (total - nums[i] - left == left) {
            return i;   
        } 
        
    }
    
    return -1;
    
};