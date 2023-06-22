// https://leetcode.com/problems/product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let leftProducts = [], rightProducts = [], output = []
    
    leftProducts[0] = 1, rightProducts[nums.length-1] = 1
    
    for (let i = 1; i < nums.length; i++) leftProducts[i] = nums[i-1] * leftProducts[i-1]
    
    for (let i = nums.length-2; i >= 0; i--) rightProducts[i] = nums[i+1] * rightProducts[i+1]
    
    
    for (let i = 0; i < nums.length; i++) output[i] = leftProducts[i] * rightProducts[i]
    
    return output
};

//left: [1, 1*1, 2*1, 3*2] = [1, 1, 2, 6]
//right: [2*12,3*4,4*1,1] = [24, 12, 4, 1]
//output: [1, 1, 2, 6] * [24, 12, 4, 1] = [24,12,8,6]