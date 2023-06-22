// https://leetcode.com/problems/binary-search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1
    
    while (l <= r) {
        let mid = Math.floor((l+r)/2)
        
        if (nums[mid] === target) {
            return mid
        } else if (target < nums[mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return -1
    
};