// https://leetcode.com/problems/max-consecutive-ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxRepeatOnes = 0, max = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) maxRepeatOnes++
        
        if (nums[i] === 0) {
            max = Math.max(max, maxRepeatOnes)
            maxRepeatOnes = 0
        }
        
        max = Math.max(max, maxRepeatOnes)
    }
    return max
    
};
