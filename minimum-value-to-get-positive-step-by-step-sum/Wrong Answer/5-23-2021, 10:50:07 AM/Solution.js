// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 1
    let minStart = 1
    
    for (let i = 0; i<nums.length; i++) {
        let sum = startValue + nums[i]
        if (sum > 0) {
            minStart = sum
            break
        }
        startValue++
    }
    
    return minStart + 1
    
};