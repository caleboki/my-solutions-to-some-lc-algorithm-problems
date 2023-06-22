// https://leetcode.com/problems/squares-of-a-sorted-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
    
//     nums = nums.map((num) => num*num)
//     nums.sort((a, b) => {return a-b})
//     return nums
    
// };

var sortedSquares = function(nums) {
    
    let result = [], left = 0, right = nums.length - 1
    
    for (let i = nums.length - 1; i >= 0; i--) {
        let square
        
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            square = nums[right]
            right--
        } else {
            square = nums[left]
            left++
        }
        result[i] = square*square
    }
   return (result)
    
};