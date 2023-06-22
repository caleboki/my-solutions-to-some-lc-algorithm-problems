// https://leetcode.com/problems/maximum-average-subarray-ii

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findMaxAverage = function(nums, k) {
    
// };

var findMaxAverage = function(nums, k) {
    const result = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        sum = 0.0
        for (let j = i; j < i + k; j++) {
            sum += nums[j]
        }
        result.push(sum/k)
    }
    console.log(result)
    return Math.max(...result)
};