// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let sum = 0, left = 0, ans = -Infinity
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        
        while (sum === k) {
            ans = Math.max(ans, i - left + 1)
            sum -= nums[left]
            left++
        }
    }
    return (ans !== -Infinity) ? ans : 0
    
};