// https://leetcode.com/problems/kth-largest-element-in-an-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort(function(a, b){return b-a})
    console.log(nums)
    let result = []
    
    for (let i = 0; i < k; i++){
        k--
        result.push(nums[i])
        
    }
    console.log(result)
    return nums[k]
};