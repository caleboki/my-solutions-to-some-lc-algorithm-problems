// https://leetcode.com/problems/target-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0
    
    const calculate = (nums, i, sum, t) => {
        if (i === nums.length) {
            if (sum === t) count++
        } 
        else 
        {
            calculate(nums, i+1, (sum + nums[i]), t)
            calculate(nums, i+1, (sum - nums[i]), t)
        }
    }
    
    calculate(nums, 0, 0, target)
    
    return count
};