// https://leetcode.com/problems/find-greatest-common-divisor-of-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums = [Math.min(...nums), Math.max(...nums)]
    if (nums[0] === 0 || nums[1] === 0) return Math.max(nums[0], nums[1])
    let start = Math.min(...nums)
    
    for (let i = start; i > 0; i--) {
        if ((nums[0] % i === 0) && (nums[1] % i === 0)) return i
    }
    
    
};