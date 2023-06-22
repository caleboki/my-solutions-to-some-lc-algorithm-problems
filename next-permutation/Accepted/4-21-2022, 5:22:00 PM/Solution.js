// https://leetcode.com/problems/next-permutation

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//https://www.youtube.com/watch?v=6qXO72FkqwM
var nextPermutation = function(nums) {
    // Length of the array
    
    // Index of the first element that is smaller than
    // the element to its right.
    let index = -1;
    // Loop from right to left
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index = i - 1;
            break;
        }
    }
    // Base condition
    if (index === -1) {
        reverse(nums, 0, nums.length - 1);
        return nums;
    }
    let j;
    // Again swap from right to left to find first element
    // that is greater than the above find element
    for (let i = nums.length - 1; i >= index + 1; i--) {
        
        if (nums[i] > nums[index]) {
            j = i;
            break;
        }
    }
    // Swap the elements
    swap(nums, index, j);
    
    // Reverse the elements from index + 1 to the nums.length
    reverse(nums, index + 1, nums.length - 1);
    
    return nums;
};

const reverse = (nums, i, j) => {
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
};

const swap = (nums, i, index) => {
    const temp = nums[index];
    nums[index] = nums[i];
    nums[i] = temp;
};




