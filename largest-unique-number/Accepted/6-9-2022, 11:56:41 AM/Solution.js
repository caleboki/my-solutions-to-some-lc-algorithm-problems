// https://leetcode.com/problems/largest-unique-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let map = new Map()
    
    for (let n of nums) {
        if (!map.has(n)) map.set(n, 0)
        map.set(n, map.get(n)+1)
    }
    
    nums.sort((a, b) => {return b - a})
    
    for (let n of nums) {
        if (map.get(n) === 1) return n
    }
    
    return -1
};