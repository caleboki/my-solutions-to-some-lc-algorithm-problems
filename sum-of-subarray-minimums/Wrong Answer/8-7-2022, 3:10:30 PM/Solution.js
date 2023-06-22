// https://leetcode.com/problems/sum-of-subarray-minimums

/**
 * @param {number[]} arr
 * @return {number}
 */
// var sumSubarrayMins = function(arr) {
//     let sum = 0
    
//     for (let i = 0; i < arr.length; i++) {
//         let min = arr[i], j = i
        
//         while (j < arr.length) {
//             min = Math.min(min, arr[j])
//             sum += min
//             j++
//         }
        
//     }
//     return sum
// };

const sumSubarrayMins = (arr) => {
    let sum = 0
    
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        
        for (let j = i; j < arr.length; j++) {
            min = Math.min(min, arr[j])
            sum += min
        }
        
    }
    return sum
}