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
// const maxProduct = (nums) => {
//     if (nums.length === 0) return 0
    
//     let maxSoFar = nums[0]
//     let min = nums[0]
//     let result = maxSoFar
    
//     for (let i = 1; i < nums.length; i++) {
//         let num = nums[i]
//         let temp = Math.max(num, Math.max(maxSoFar * num, min * num))
//         min = Math.min(num, Math.min(maxSoFar * num, min * num))
        
//         maxSoFar = temp
//         result = Math.max(maxSoFar, result)
//     }
//     return result
// }

const maxProduct = (nums) => {
    let result = Math.max(...nums)
    //let result = nums[0]
    let curMin = 1
    let curMax = 1
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            curMin = 1
            curMax = 1
            continue
        }
        let temp = nums[i] * curMax
        curMax = Math.max(nums[i] * curMax, nums[i] * curMin, nums[i])
        curMin = Math.min(nums[i] * curMin, temp, nums[i])
        
        result = Math.max(result, curMax)
        
    }
    return result
    
}