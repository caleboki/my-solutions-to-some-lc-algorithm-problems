// https://leetcode.com/problems/product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    
    let leftProducts = [], rightProducts = [], output = []
    
    leftProducts[0] = 1, rightProducts[n-1] = 1
    
    for (let i = 1; i < n; i++) {
        leftProducts[i] = nums[i-1] * leftProducts[i-1]
    }
    
    for (let i = n-2; i >= 0; i--) {
        rightProducts[i] = nums[i+1] * rightProducts[i+1]
    }
    
    for (let i = 0; i < n; i++) {
        output[i] = leftProducts[i] * rightProducts[i]
    }
    
    return output
    
    
};