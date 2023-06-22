// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let maxQ = [], minQ = [], start = 0, size = 0
    
    for (let i = 0; i < nums.length; i++) {
        
        while (maxQ.length && maxQ[maxQ.length - 1] < nums[i]) {
            maxQ.pop()
        }
        
        while (minQ.length && minQ[minQ.length - 1] > nums[i]) {
            minQ.pop()
        }
        
        minQ.push(nums[i])
        maxQ.push(nums[i])
        
        if (maxQ[0] - minQ[0] > limit) {
            if (nums[start] === maxQ[0]) maxQ.shift()
            if (nums[start] === minQ[0]) minQ.shift()
            start++
        }
    
        size = Math.max(size, i - start + 1)
    }
    return size
};