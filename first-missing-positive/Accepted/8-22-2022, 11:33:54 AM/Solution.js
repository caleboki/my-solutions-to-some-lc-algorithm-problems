// https://leetcode.com/problems/first-missing-positive

/**
 * @param {number[]} nums
 * @return {number}
 */


const firstMissingPositive = (nums) => {
    
    
    nums = new Set(nums.filter(f => f >= 0))
    let max = Math.max(...nums)
    if (nums.size === 0) return 1
    
    for (let i = 0; i < max + 1; i++) {
        if (!nums.has(i-1) && (i > 1)) {
            return i-1 
        } else if (!nums.has(i+1)) {
            return i+1
        }
    }
}