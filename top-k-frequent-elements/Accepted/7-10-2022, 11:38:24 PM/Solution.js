// https://leetcode.com/problems/top-k-frequent-elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    let map = {}
    let pq = []
    
    //creating a frequency map of nums
    for (let n of nums) {
        if (map[n] === undefined) map[n] = 0
        map[n]++
        
    }
    
    //converting frequency map to array
    const sortable = []
    
    for (let item in map) {
        sortable.push([item, map[item]])
    }
    
    //sort by frequent elements where a[1]/b[1] is the frequency of the element obtained above
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    sortable.length = k //shorten to k
    
    //store most frequent element
    sortable.forEach(sort => {
        pq.push(sort[0])
    })
    
    return pq
};

