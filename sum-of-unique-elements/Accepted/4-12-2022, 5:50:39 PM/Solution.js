// https://leetcode.com/problems/sum-of-unique-elements

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0, map = {}
    
    for (let num of nums) {
        if (!(num in map)) map[num] = 0
        map[num]++
    }
    
    let p = Object.keys(map).filter(f => map[f] === 1)
    
    for (let n of p) sum += +n
    return sum
    
    
};