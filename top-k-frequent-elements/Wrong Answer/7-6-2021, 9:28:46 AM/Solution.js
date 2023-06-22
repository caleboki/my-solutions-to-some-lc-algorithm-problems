// https://leetcode.com/problems/top-k-frequent-elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function(nums, k) {
//     let map = {}
//     let result = []
    
//     for (n of nums) {
//         if (map[n] !== undefined) {
//             map[n]++
//         } else {
//             map[n] = 1
//         }
//     }
//     console.log(map)
    
//     let freq = Object.values(map)
//     freq = Array.from(new Set(freq))
//     console.log(freq)
    
//     for (let i = 0; i < k; i++) {
//         result.push(...Object.keys(map).filter(f => map[f] === freq[i]))
//     }
//     return result
// };


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
    
    const sortable = Object.fromEntries(
        Object.entries(map).sort(([,a],[,b]) => Math.abs(a)-Math.abs(b))
    );
    
    console.log(sortable)
    
    // for (let i = 0; i < Object.keys(sortable).length; i++) {
    //     pq.push(Object.keys(sortable)[i])
    //     if (pq.length > k) pq.pop()
    // }
    // return pq
    
    let result = Object.keys(sortable)
    result.length = k
    return result
    
};