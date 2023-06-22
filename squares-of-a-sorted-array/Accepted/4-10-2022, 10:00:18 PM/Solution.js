// https://leetcode.com/problems/squares-of-a-sorted-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    nums = nums.map((num) => num*num)
    nums.sort((a, b) => {return a-b})
    return nums
    
};