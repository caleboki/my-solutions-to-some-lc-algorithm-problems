// https://leetcode.com/problems/longest-consecutive-sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     nums = new Set(nums)
    
//     let longestStreak = 0
    
//     for (let num of nums) {
//         if (!nums.has(num-1)) {
//             let currentNum = num
//             let currentStreak = 1
            
//             while (nums.has(currentNum + 1)) {
//                 currentStreak++
//                 currentNum++
//             }
            
//             longestStreak = Math.max(longestStreak, currentStreak)
//         }
//     }
    
//     return longestStreak
// };

const longestConsecutive = (nums) => {
    nums = nums.sort((a, b) => {return a-b})
    let max = 1
    console.log(nums)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1] + 1) max++
    }
    
    return max
}