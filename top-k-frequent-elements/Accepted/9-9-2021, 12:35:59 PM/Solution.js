// https://leetcode.com/problems/top-k-frequent-elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    let map = {}
    let pq = []
    
    for (n of nums) {
        if (map[n] !== undefined) {
            map[n]++
        } else {
            map[n] = 1
        }
    }
    
    const sortable = []
    
    for (item in map) {
        sortable.push([item, map[item]])
    }
    
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    sortable.length = k
    
    sortable.forEach(sort => {
        pq.push(sort[0])
    })
    
    return pq
};