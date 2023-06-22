// https://leetcode.com/problems/distinct-numbers-in-each-subarray

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var distinctNumbers = function(nums, k) {
    let result = [], set = new Set()
    
    for (let i = 0; i < nums.length - k+1; i++) {
        
        let window = i + k
        
        for (let j = i; j < window; j++) {
            set.add(nums[j])
        }
        
        result.push(set.size)
        set = new Set()
        
    }
    return result
};

