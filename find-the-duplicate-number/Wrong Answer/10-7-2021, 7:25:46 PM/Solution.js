// https://leetcode.com/problems/find-the-duplicate-number

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function(nums) {
//     nums.sort(function (a, b) {
//         return a-b
//     })
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i-1] || nums[i] === nums[i+1]) return nums[i]
//     }
// };

var findDuplicate = function(nums) {
    let low = 1
    let high = nums.length - 1
    
    while (low < high){
        let count = 0
        const mid = low + (high-low) / 2
        for (let num of nums){
            if (num<=mid){
                count++
            }
        }
        if (count <= mid){
            low = mid + 1
            break
        }
        else {
            high = mid
        }
    }
    return Math.floor(low)

};