// https://leetcode.com/problems/running-sum-of-1d-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//     let sum = 0
//     let res = []
    
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         res.push(sum)
//     }
//     return res
// };


//In place
var runningSum = function(nums) {
    let res = []
    res[0] = nums[0] // Initialize first element of result array with first element in nums.
    
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i-1] + nums[i]
    }
    return res
};