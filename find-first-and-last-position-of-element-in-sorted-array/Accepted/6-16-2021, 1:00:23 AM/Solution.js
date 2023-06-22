// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1]
    
//     let result = []
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) result.push(i)
//     }
    
//     return result
    
   let left = 0, right = nums.length - 1, leftIndex = -1, rightIndex = -1
   
   while (left <= right) {
       let mid = Math.floor((left + right)/2)
       if (target === nums[mid]) {
           leftIndex = mid
           right = mid - 1
          
       } else if (target < nums[mid]) {
           right = mid - 1
       } else {
           left = mid + 1
       }
   }
    
   right = nums.length - 1
   while (left <= right) {
       let mid = Math.floor((left + right)/2)
       if (target === nums[mid]) {
           rightIndex = mid
           left = mid + 1
       } else if (target < nums[mid]) {
           right = mid - 1
       } else {
           left = mid + 1
       }
       
   }
    
    return [leftIndex, rightIndex]
    

};