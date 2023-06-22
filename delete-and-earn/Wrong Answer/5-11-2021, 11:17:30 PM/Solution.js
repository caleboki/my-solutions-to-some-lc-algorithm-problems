// https://leetcode.com/problems/delete-and-earn

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let points = 0;
    
    nums.sort(function(a,b){return b - a})
     
    for (let i = 0; i<nums.length; i++) {     
        points += nums[i]
        
        if (nums.includes(nums[i] - 1)) nums.splice(nums.indexOf(nums[i] - 1), 1)
        if (nums.includes(nums[i] + 1)) nums.splice(nums.indexOf(nums[i] + 1), 1)
    }
    
    return points
};