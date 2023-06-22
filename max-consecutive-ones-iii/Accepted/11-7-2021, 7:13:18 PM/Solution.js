// https://leetcode.com/problems/max-consecutive-ones-iii

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var longestOnes = function(nums, k) {
//     let j = 0, map = {}, max = 0, maxRepeatOnes = 0
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) continue
        
//         if (!(nums[i] in map)) {
//             map[nums[i]] = 0
//         }
//         map[nums[i]]++
        
//         maxRepeatOnes = Math.max(maxRepeatOnes, map[nums[i]])
        
//         if ((i-j+1 - maxRepeatOnes) > k) {
//             map[nums[j]]--
//             j++
//         }
        
//         max = Math.max(max, i-j+1)
//     }
//     return max
    
// };

var longestOnes = function(nums, k) {
    let j = 0, maxRepeatOnes = 0, max = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) maxRepeatOnes++
        
        if ((i-j+1 - maxRepeatOnes) > k) {
            if (nums[j] === 1) maxRepeatOnes--
            j++
        }
        max = Math.max(max, i-j+1)
    }
    return max
    
};