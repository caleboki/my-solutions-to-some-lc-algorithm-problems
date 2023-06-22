// https://leetcode.com/problems/continuous-subarray-sum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let windowStart = 0, multipleSum, windowSum = 0
    
    for (let num in nums) {
        //accumulate sum
        windowSum += nums[num]
        
        if (num >= 1) {
            multipleSum = windowSum
            
            if ((multipleSum % k) === 0) return true
            
            windowSum -= nums[windowStart]
            //console.log(windowSum)
            windowStart++
        }
        
    }
    
    return false
    
};