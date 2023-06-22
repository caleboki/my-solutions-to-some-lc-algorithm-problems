// https://leetcode.com/problems/single-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map()
    
    for (let num of nums) {
        if (!map.has(num)) map.set(num, 0)
        map.set(num, map.get(num) + 1)
    }
    
    map = Array.from(map)
    
    for (let num of map) {
        if (num[1] === 1) return num[0]
    }
};