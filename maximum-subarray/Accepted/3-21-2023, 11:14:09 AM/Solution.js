// https://leetcode.com/problems/maximum-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */


// Initialize 2 integer variables. Set both of them equal to the first value in the array.

// currentSubarray will keep the running count of the current subarray we are focusing on.

// maxSubarray will be our final return value. Continuously update it whenever we find a bigger subarray.

// Iterate through the array, starting with the 2nd element (as we used the first element to initialize our variables). For each number, add it to the currentSubarray we are building. If currentSubarray becomes negative, we know it isn't worth keeping, so throw it away. Remember to update maxSubarray every time we find a new maximum.

// Return maxSubarray.

var maxSubArray = function(nums) {
    
    if (nums.length === 1) return nums[0];
    if (nums.length === 0) return 0;
    let current = nums[0];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        current = Math.max(num, current + num);
        max = Math.max(max, current);
    }
    
    return max;
    
};