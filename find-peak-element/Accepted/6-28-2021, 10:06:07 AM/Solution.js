// https://leetcode.com/problems/find-peak-element

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
//     for (let i = 0; i < nums.length-1; i++) {
//         if (nums[i] > nums[i+1]) return i
        
//     }
//     return nums.length - 1
    
    let left = 0
    let right = nums.length - 1
    
    while(left < right) {
        let mid = Math.floor(left + (right - left)/2)
        if (nums[mid] > nums[mid + 1]) {
            right = mid  
        } else {
            left = mid + 1
        }
        
    }
    return left
   
    
};