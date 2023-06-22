// https://leetcode.com/problems/minimum-moves-to-equal-array-elements

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a, b) => {return a - b})
    let count = 0
    
    for (let i = nums.length - 1; i > -1; i--) {
        count += (nums[i] - nums[0])
    }
    return count
};