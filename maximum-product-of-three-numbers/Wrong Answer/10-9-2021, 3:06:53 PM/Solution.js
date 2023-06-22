// https://leetcode.com/problems/maximum-product-of-three-numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort(function(a, b) {return b-a})
    
    let prod = 1
    
    for (let i = 0; i < 3; i++) {
        prod = prod * nums[i]
    }
    
    return prod
};