// https://leetcode.com/problems/range-sum-query-immutable

/**
 * @param {number[]} nums
 */
// var NumArray = function(nums) {
    
// };

// /** 
//  * @param {number} left 
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(left, right) {
    
// };

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

 class NumArray {
   constructor(nums) {
     this.nums = nums
   }

   sumRange(left, right) {
     let sum = 0

     for (let i = left; i < right + 1; i++) {
       sum += this.nums[i]
     }

     return sum
   }

 }