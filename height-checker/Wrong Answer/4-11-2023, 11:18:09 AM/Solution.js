// https://leetcode.com/problems/height-checker

/**
 * @param {number[]} heights
 * @return {number}
 */
// var heightChecker = function(heights) {
//     let expected = []
//     let count = 0
    
//     for (h of heights) {
//         expected.push(h)
//     }
//     expected.sort(function(a,b){return a - b})
    
//     for (let i = 0; i < expected.length; i++) {
//         if (expected[i] !== heights[i]) count++
//     }
    
//     return count
// };

const heightChecker = (heights) => {
    let hasSwapped = true, count = 0
    
    while (hasSwapped) {
        hasSwapped = false
        for (let i = 0; i < heights.length - 1; i++) {
            if (heights[i] > heights[i+1]) {
                let temp = heights[i]
                heights[i] = heights[i+1]
                heights[i+1] = temp
                hasSwapped = true
                count++
            }
            
        }
    }
    
    return count-1
}

// public class Solution {
//     public void bubbleSort(int[] arr) {
//         // Mutates arr so that it is sorted via swapping adjacent elements until
//         // the arr is sorted.
//         boolean hasSwapped = true;
//         while (hasSwapped) {
//             hasSwapped = false;
//             for (int i = 0; i < arr.length - 1; i++) {
//                 if (arr[i] > arr[i + 1]) {
//                     // Swap adjacent elements
//                     int temp = arr[i];
//                     arr[i] = arr[i + 1];
//                     arr[i + 1] = temp;
//                     hasSwapped = true;
//                 }
//             }
//         }
//     }
// }