// https://leetcode.com/problems/contains-duplicate-ii

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {}
    
    for (let num of nums) {
        if (!(num in map)) map[num] = 0
        map[num]++
    }
    
    let check = new Set(Object.keys(map).filter(f => map[f] > 1))
    let checkIndex = []
    
    for (let i in nums) {
        if (check.has(nums[i].toString())) checkIndex.push(i)
    }
    
    for (let i = 0; i < checkIndex.length - 1; i++) {
        let j = i+1
        if (Math.abs(i - j) <= k) return true
    }
    
    return false
};