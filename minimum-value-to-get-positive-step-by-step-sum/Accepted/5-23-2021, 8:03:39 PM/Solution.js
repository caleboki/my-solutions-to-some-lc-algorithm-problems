// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0
    let startValue = 0
    for (let i = 0; i<nums.length; i++) {
        
        sum += nums[i]
        if (sum < startValue) startValue = sum //making sure start value is +ve
         
    }
    return 1-startValue //max startValue is 1 therefore min start is 1-startValue
};



