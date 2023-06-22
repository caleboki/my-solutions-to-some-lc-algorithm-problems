// https://leetcode.com/problems/minimum-size-subarray-sum

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0
    let ans = Number.MAX_VALUE
    let left = 0
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while(sum >= target) {
            ans = Math.min(ans, i+1-left)
            sum -= nums[left]
            left++
        }
    }
    return (ans !== Number.MAX_VALUE) ? ans : 0
    
    
};