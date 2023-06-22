// https://leetcode.com/problems/sort-colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
//     if (nums.length === 1) return nums[0];
//     if (nums.length === 0) return [];
    
//     nums.sort(function(a, b) {return a - b})
//     return nums;
    
    if (nums.length === 0 || nums.length === 1) return;
    let start = 0; //this keeps track of putting zeroes at the front
    let end = nums.length - 1; //keeps track of putting twos at the back
    let index = 0; //current number
    
    while (index <= end && start < end ) {
        if (nums[index] === 0) {
            //nums[index] = nums[start]; 
            nums[start] = 0;
            start++;
            index++;
        }
        
        else if (nums[index] === 2) {
            nums[index] = nums[end]; 
            nums[end] = 2;
            end--;
        } else {
            index++;
        }
            
    }
    
    return nums; 
    
};