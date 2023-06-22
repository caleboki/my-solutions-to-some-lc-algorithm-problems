// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0
    let startValue = 1
    
    for (let i = 0; i<nums.length; i++) {
        
        sum += startValue + nums[i]
        if (sum < 0) {
            startValue++
            //restarting loop
            i = -1 
            continue
        } 
        
        
    }
    
    return startValue
};


