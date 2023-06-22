// https://leetcode.com/problems/3sum-closest

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let min = Infinity
    
    const findPairs = (arr, target, left) => {
        let right = arr.length - 1
        
        while (left < right) {
            let current = arr[left] + arr[right]
            min = Math.min(min, Math.abs(target-current))
            left++, right--
        }
        
    }
    
    for (let i = 0; i < nums.length; i++) {
        findPairs(nums, target, i)
    }
    
    return min
    
    
};