// https://leetcode.com/problems/max-consecutive-ones-ii

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, j = 0, maxRepeatOnes = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) maxRepeatOnes++
        
        if ((i-j+1 - maxRepeatOnes) > 1) {
            if (nums[j] === 1) maxRepeatOnes--
            j++
        }
        max = Math.max(max, i-j+1)
    }
    return max
    
};