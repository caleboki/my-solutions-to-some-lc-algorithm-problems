// https://leetcode.com/problems/max-consecutive-ones-iii

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var longestOnes = function(nums, k) {
    let j = 0, maxRepeatOnes = 0, max = 0
    
    
    // Try to extend the range [j, i]
    for (let i = 0; i < nums.length; i++) {
        //count 1s
        if (nums[i] === 1) maxRepeatOnes++
        
        
        //Current window size is from j to i, overall we have a maximum of 1s
        //repeating 'maxRepeatOnes' times, this means we can have a window with 
        //'maxRepeatOnes' 1s and the remaining are 0s which should replace with 1s.
        // now, if the remaining 0s are more than 'k', it is the time to shrink the 
        //window as we are not allowed to replace more than 'k' 0s
        
        if ((i-j+1 - maxRepeatOnes) > k) {
            if (nums[j] === 1) maxRepeatOnes--
            j++
        }
        max = Math.max(max, i-j+1)
    }
    return max
    
};