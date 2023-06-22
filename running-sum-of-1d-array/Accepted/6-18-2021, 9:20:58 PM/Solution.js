// https://leetcode.com/problems/running-sum-of-1d-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0
    let res = []
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        res.push(sum)
    }
    return res
};