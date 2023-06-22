// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product

/**
 * @param {number[]} nums
 * @return {number}
 */

const getMaxLen = (nums) => {
    let max = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums.length - i <= max) return max
        
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