// https://leetcode.com/problems/increasing-triplet-subsequence

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var increasingTriplet = function(nums) {
//     let output = []

//     for (let i = 0; i < nums.length; i++) {
        
//         if (nums[i] > output[output.length - 1]) {
//             output.push(nums[i])
//             console.log(output)
//         } else {
            
//             output = [nums[i]]
//             continue
//             console.log(output)
//         }
//         if (output.length === 3) return true
//     }
//     return false 
// };

const increasingTriplet = (nums) => {
    let first = Infinity, second = Infinity

    for (let num of nums) {
        if (num <= first) {
            first = num
        } else if (num <= second) {
            second = num
        } else {
            return true
        }
    }
    return false
}