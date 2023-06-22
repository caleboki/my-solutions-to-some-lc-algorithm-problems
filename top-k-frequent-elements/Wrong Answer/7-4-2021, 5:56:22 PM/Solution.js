// https://leetcode.com/problems/top-k-frequent-elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    let result = []
    
    for (n of nums) {
        if (map[n] !== undefined) {
            map[n]++
        } else {
            map[n] = 1
        }
    }
    console.log(map)
    
    let freq = Object.values(map)
    freq = Array.from(new Set(freq))
    console.log(freq)
    
    for (let i = 0; i < k; i++) {
        result.push(...Object.keys(map).filter(f => map[f] === freq[i]))
    }
   
    
    return result
};