// https://leetcode.com/problems/subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     let output = [[]]
    
//     for (let num of nums) {
//         let length = output.length
        
//         for (let i = 0; i < length; i++) {
//             output.push([...output[i], num])
//         }
//     }
//     return output 
// };

// Let's start from empty subset in output list. At each step one takes new integer into consideration and generates new subsets from the existing ones.
const subsets = (nums) => {
    let result = [[]]
    
    for (let num of nums) {
        let length = result.length
        for (let i = 0; i < length; i++) {
            result.push([...result[i], num])
        }
        
    }
}