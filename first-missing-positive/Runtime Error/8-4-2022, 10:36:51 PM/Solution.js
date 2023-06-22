// https://leetcode.com/problems/first-missing-positive

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = nums.filter(f => f >= 0)
    if (nums.length === 0) return 1
    let min = Math.min(...nums), max = Math.max(...nums), map = {}
    
    for (let i = min; i < max + 2; i++) map[i] = 0
    
    for (let num of nums) {
        map[num]++
    }
    console.log(map)
    for (let i = 1; i < max + 2; i++) {
       
        if (!map[i] || map[i] === 0) return i
    }
    
    
    
    
};