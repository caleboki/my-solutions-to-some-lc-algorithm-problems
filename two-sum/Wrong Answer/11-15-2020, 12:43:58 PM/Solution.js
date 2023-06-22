// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var pairs = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length-1; j++) {
            if (nums[i] + nums[j] == target){
                pairs.push(i, j)
            }
        }
        
    }
    return(pairs);
    
};