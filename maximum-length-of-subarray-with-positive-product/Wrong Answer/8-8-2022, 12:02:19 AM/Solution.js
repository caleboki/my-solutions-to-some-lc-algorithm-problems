// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product

/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    
    let neg = nums.filter(f => f < 0)
    if (neg.length % 2 === 0 )  return nums.length
    
    let stack = [], max = 0, negNum = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            max = Math.max(max, stack.length)
            stack = []
            continue
        }
        if (nums[i] < 0) negNum++
        
        if (negNum > 2) {
            max = Math.max(max, stack.length)
            stack = []
            negNum = 0
            continue
        }
        
        stack.push(nums[i])
    }
    
    return max
    
    
    
};