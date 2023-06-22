// https://leetcode.com/problems/find-numbers-with-even-number-of-digits

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0
    nums = nums.map(String)
    
    for (num of nums) {
        if (num.length % 2 === 0) count++
    }
    
    return count
};