// https://leetcode.com/problems/minimum-moves-to-equal-array-elements

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a, b) => {return a - b})
    let count = 0
    
    for (let i = nums.length - 1; i > 0; i--) {
        count += (nums[i] - nums[0])
    }
    return count
};

// var minMoves = function(nums) {
//     let min = Number.POSITIVE_INFINITY
//     let sum = 0
    
//     for (let num of nums) {
//         sum += num
//         if (num < min) {
//             min = num
//         }
//     }

//     return sum - (nums.length * min)
// };