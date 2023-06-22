// https://leetcode.com/problems/missing-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let max = nums.length
    let map = {}
   
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = 1
    }
    
    for (let i = 0; i < nums.length + 1; i++) {
        if (map[i] === undefined) return i
    }
    
    
    
};