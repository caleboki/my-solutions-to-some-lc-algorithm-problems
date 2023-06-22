// https://leetcode.com/problems/binary-search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1, mid
    
    while (l <= r) {
        mid = Math.floor((l+r)/2)
        
        if (nums[mid] === target) {
            return mid
        } else if (target < nums[mid]) {
            r = mid
        } else {
            l = mid 
        }
    }
    return -1
    
};