// https://leetcode.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let zeroes = 0
    
//     for (let i = 0; i < nums.length; i++) {
        
//         if (nums[i] === 0) {
//             zeroes++
//         }
//     }
    
//     for (let i = 0; i < zeroes; i++) {
//         nums.push(0)
//     }
    
//     for (let i = 0; i < nums.length-zeroes; i++) {
//         if (nums[i] === 0) {
//             nums.splice(i, 1)
//             i-- 
//         }
//     }
// };

var moveZeroes = function(nums) {
    let index = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i]
            index++
        }
    }
    
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }
    
    
};


