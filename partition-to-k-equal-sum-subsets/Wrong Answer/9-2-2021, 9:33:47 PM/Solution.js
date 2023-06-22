// https://leetcode.com/problems/partition-to-k-equal-sum-subsets

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = 0
    
    nums.forEach(num => {
        sum += num
    })
    
    if (sum % k > 0) return false
    return true
};