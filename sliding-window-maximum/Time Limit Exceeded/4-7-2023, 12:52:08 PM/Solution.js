// https://leetcode.com/problems/sliding-window-maximum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     let output = []
    
//     for (let i = 0; i < nums.length-k+1; i++) {
//         let max = nums[i]
//         for (let j = i; j < i+k; j++) {
//             max = Math.max(max, nums[j])
//         }
//         //output[i] = max
//         output.push(max)
//     }
//     return output
// };

const maxSlidingWindow = (nums, k) => {
    let output = [], i = 0

    while (i < nums.length-k+1) {
        let max = nums[i]

        for (let j = i; j < i+k; j++) {
            max = Math.max(max, nums[j])
        }
        output.push(max)
        i++
    }
    return output
}