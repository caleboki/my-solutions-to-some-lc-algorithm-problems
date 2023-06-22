// https://leetcode.com/problems/first-missing-positive

/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function(nums) {
//     nums = nums.filter(f => f >= 0)
//     if (nums.length === 0) return 1
    
//     let min = Math.min(...nums), max = Math.max(...nums), map = {}
    
//     for (let i = min; i < max + 2; i++) map[i] = 0
    
//     for (let num of nums) {
//         map[num]++
//     }
    
//     for (let i = 1; i < max + 2; i++) {
//         if (!map[i] || map[i] === 0) return i
//     }
// };


// const firstMissingPositive = (nums) => {
//     let contains = 0
    
//     //base case
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//             contains++
//             break
//         }
//     }
    
//     if (contains === 0) return 1
    
//     for (let i = 0; i < nums.length; i++) {
//         let a = Math.abs(nums[i])
//         if (a === nums.length) {
//             nums[0] = -Math.abs(nums[0])
//         } else {
//             nums[a] = -Math.abs(nums[a])
//         }
//     }
    
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > 0) return i
//     }
    
//     if (nums[0] > 0) return nums.length
    
//     return nums.length + 1
// }

const firstMissingPositive = (nums) => {
    let max = Math.max(...nums)
    nums = nums.filter(f => f >= 0)
    
    nums = new Set(nums)
    if (nums.size === 0) return 1
    
    for (let i = 0; i < max + 1; i++) {
        if (!nums.has(i-1) && (i > 1)) {
            return i-1 
        } else if (!nums.has(i+1)) {
            
            return i+1
        }
    }
}