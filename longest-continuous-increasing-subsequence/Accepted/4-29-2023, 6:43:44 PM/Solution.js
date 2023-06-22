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
        } else {
            longest = Math.max(longest, stack.length)
            stack = [nums[i]]
        }
    }

    return Math.max(longest, stack.length)
};

// const findLengthOfLCIS = (nums) => {
//     let ans = 0, anchor = 0

//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i-1] >= nums[i]) anchor = i
//         ans = Math.max(ans, i - anchor + 1)
//     }
//     return ans
// }