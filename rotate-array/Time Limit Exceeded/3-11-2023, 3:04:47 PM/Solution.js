// https://leetcode.com/problems/rotate-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k%nums.length
    let temp, prev

    for (let i = 0; i < k; i++) {
        prev = nums[nums.length - 1]
        
        for (let j = 0; j < nums.length; j++) {
            temp = nums[j]
            nums[j] = prev
            prev = temp
        }
    }
};

// const rotate = (nums, k) => {
//     let a = []

//     for (let i = 0; i < nums.length; i++) {
//         a[(i+k) % nums.length] = nums[i]
//     }

//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = a[i]
//     }
// }
