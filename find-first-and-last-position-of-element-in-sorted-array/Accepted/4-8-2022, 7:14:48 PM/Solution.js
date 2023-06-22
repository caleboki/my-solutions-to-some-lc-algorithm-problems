// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = []
    
    for (let i in nums) {
        if (nums[i] === target) result.push(i)
    }
    
    if (result.length === 0) return [-1, -1]
    
    result = [result[0], result[result.length - 1]]
    
    return result
            
              
    
};