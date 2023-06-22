// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product

/**
 * @param {number[]} nums
 * @return {number}
 */
// var getMaxLen = function(nums) {
    
//     let neg = nums.filter(f => f < 0)
//     if (neg.length % 2 === 0 )  return nums.length
    
//     let stack = [], max = 0, negNum = 0
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             max = Math.max(max, stack.length)
//             stack = []
//             continue
//         }
//         if (nums[i] < 0) negNum++
        
//         if (negNum > 2) {
//             max = Math.max(max, stack.length)
//             stack = []
//             negNum = 0
//             continue
//         }
        
//         stack.push(nums[i])
//     }
//     stack = stack.filter(f => f > 0 )
//     max = Math.max(max, stack.length)
    
//     return max
// };

// const getMaxLen = function(nums) {
//     let neg = nums.filter(f => f < 0)
   
//     if (neg.length && neg.length % 2 === 0 )  return nums.length
//     neg = neg.length
    
//     let stack = [], max = 0
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             max = Math.max(max, stack.length)
//             stack = []
//             continue
//         }
//         if (nums[i] < 0) {
//             if (neg === 1) {
//                 max = Math.max(max, stack.length)
//                 stack = []
//                 neg--
//                 continue 
//             }
//             neg--
            
//         }
//         stack.push(nums[i])
        
//     }

//     max = Math.max(max, stack.length)
    
//     return max
// };
const getMaxLen = (nums) => {
    let max = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let neg = nums[i] < 0 ? 1 : 0
            max = Math.max(max, nums[i] < 0 ? 0 : 1)
            
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < 0) {
                    neg++
                } else if (nums[j] === 0) break
                
                if (neg % 2 === 0) max = Math.max(max, j - i + 1)
                
            }
            
        }
    }
    return max
    
  
}