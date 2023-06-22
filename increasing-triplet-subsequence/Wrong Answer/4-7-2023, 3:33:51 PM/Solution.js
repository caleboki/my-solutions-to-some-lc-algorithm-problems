// https://leetcode.com/problems/increasing-triplet-subsequence

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let output = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        
        if (nums[i] > output[output.length - 1]) {
            output.push(nums[i])
            console.log(output)
        } else {
            continue
            output = [nums[i]]
            console.log(output)
        }
        if (output.length === 3) return true
    }
    return false
    
};