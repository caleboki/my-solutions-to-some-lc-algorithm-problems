// https://leetcode.com/problems/two-sum-less-than-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    let maxSum = -1
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length - 1; j++) {
            let sum = nums[i] + nums[j]
            if (sum < k && sum > maxSum) maxSum = sum
        }
    }
    
    return maxSum
    
};