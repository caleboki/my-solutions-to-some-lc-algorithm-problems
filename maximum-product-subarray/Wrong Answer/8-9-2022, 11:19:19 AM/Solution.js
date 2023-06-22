// https://leetcode.com/problems/maximum-product-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     if (nums.length === 1) return nums[0]
//     if (nums.length === 0) return []
//     let current = nums[0] === 0 ? 1 : nums[0]
//     let max = nums[0]
    
//     for (let i = 1; i < nums.length; i++) {
//        let num = nums[i]
//        current =  current * num
//         max = Math.max(max, current)
//     }
    
//     return max
// };


const maxProduct = (nums) => {
    if (nums.length === 0) return 0
    
    let max = nums[0]
    let min = nums[0]
    let result = max
    
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]
        max = Math.max(num, Math.max(max * num, min * num))
        min = Math.min(num, Math.min(max * num, min * num))
        
        //max = temp
        result = Math.max(max, result)
    }
    
    return result
    
}