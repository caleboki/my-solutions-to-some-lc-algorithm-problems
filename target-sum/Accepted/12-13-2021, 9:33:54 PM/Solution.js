// https://leetcode.com/problems/target-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0
    
    const calculate = (i, sum, t) => {
        if (i === nums.length) {
            if (sum === t) count++
        } 
        else 
        {
            calculate(i+1, (sum + nums[i]), t)
            calculate(i+1, (sum - nums[i]), t)
        }
    }
    
    calculate(0, 0, target)
    
    return count
};

// var findTargetSumWays = function(nums, target) {
//     let memo = {}
    
//     const calculate = (i, count) => {}
// };