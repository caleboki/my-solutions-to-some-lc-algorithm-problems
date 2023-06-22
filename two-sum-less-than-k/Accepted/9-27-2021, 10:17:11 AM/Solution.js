// https://leetcode.com/problems/two-sum-less-than-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var twoSumLessThanK = function(nums, k) {
//     let maxSum = -1
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             let sum = nums[i] + nums[j]
//             if (sum < k && sum > maxSum) maxSum = sum
//         }
//     }
//     return maxSum
// };

var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => {
        return a-b
    })
    
    let maxSum = -1
    
    let left = 0, right = nums.length - 1
    
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum < k) {
            maxSum = Math.max(maxSum, sum)
            left++
        } else {
            right--
        }
    }
    return maxSum
}

