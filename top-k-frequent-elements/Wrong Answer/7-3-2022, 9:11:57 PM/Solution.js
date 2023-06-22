// https://leetcode.com/problems/top-k-frequent-elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// var topKFrequent = function(nums, k) {
//     let map = {}
//     let pq = []
    
//     //creating a frequency map of nums
//     for (let n of nums) {
//         if (map[n] !== undefined) {
//             map[n]++
//         } else {
//             map[n] = 1
//         }
//     }
    
//     //converting frequency map to array
//     const sortable = []
    
//     for (let item in map) {
//         sortable.push([item, map[item]])
//     }
    
//     //sort by frequent elements where a[1]/b[1] is the frequency of the element obtained above
//     sortable.sort(function(a, b) {
//         return b[1] - a[1];
//     });
    
//     sortable.length = k //shorten to k
    
//     //store most frequent element
//     sortable.forEach(sort => {
//         pq.push(sort[0])
//     })
    
//     return pq
// };

const topKFrequent = (nums, k) => {
    let map = {}, res = []
    
    //creating a frequency map of nums
    for (let n of nums) {
        if (!(n in map)) map[n] = 0
        map[n]++
    }
    
    return Object.keys(map).filter(f => map[f] >= k)
    
    let keys = Object.keys(map)
    let values = Object.values(map)
    console.log(values)
    values = values.filter(f => f <= 2)
    
    for (let i = 0; i < keys.length; i++) {
        if (map[keys[i]] >= k) res.push(+keys[i])
    }
    return (res)
    console.log(Object.keys(map))
    console.log(map)
}