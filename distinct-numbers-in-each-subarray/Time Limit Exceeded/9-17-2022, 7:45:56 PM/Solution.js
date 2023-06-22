// https://leetcode.com/problems/distinct-numbers-in-each-subarray

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var distinctNumbers = function(nums, k) {
    let result = []
    
    for (let i = 0; i < nums.length - k+1; i++) {
        
        let  set = new Set(), window = i + k
        
        for (let j = i; j < window; j++) {
            set.add(nums[j])
        }
        result.push(set.size)
        
    }
    return result
};