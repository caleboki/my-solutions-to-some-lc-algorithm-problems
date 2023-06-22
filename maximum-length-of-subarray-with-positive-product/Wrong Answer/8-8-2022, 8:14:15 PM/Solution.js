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


const getMaxLen = function(nums) {
    let neg = nums.filter(f => f < 0)
    if (neg.length % 2 === 0 )  return nums.length
    neg = neg.length
    
    let stack = [], max = 0
    
    for (let i in nums) {
        if (nums[i] === 0) {
            max = Math.max(max, stack.length)
            stack = []
            continue
        }
        if (nums[i] < 0) {
            if (neg === 1) {
                max = Math.max(max, stack.length)
                stack = []
                neg--
                continue 
            }
            neg--
            
        } else {
            stack.push(nums[i])
        }
        
    }
    max = Math.max(max, stack.length)
    
    return max
    
   
};