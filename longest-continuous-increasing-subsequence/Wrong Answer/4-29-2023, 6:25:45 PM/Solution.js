// https://leetcode.com/problems/longest-continuous-increasing-subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let stack = [], longest = 0

    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] < nums[i]) {
            stack.push(nums[i])
            console.log(stack)
        } else {
            longest = Math.max(longest, stack.length)
            stack = []
        }
    }
    return longest
    
    
};