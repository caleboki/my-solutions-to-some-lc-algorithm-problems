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
//         if (!map[n]) map[n] = 0
//         map[n]++
//     }
    
//     //converting frequency map to array
//     const sortable = []
    
//     for (let item in map) {
//         sortable.push([item, map[item]])
//     }
    
//     //sort by frequent elements where a[1]/b[1] is the frequency of the element obtained above
//     sortable.sort(function(a, b) {
//         return b[1] - a[1];
//     })
    
//     sortable.length = k //shorten to k
    
//     //store most frequent element
//     sortable.forEach(sort => {
//         pq.push(sort[0])
//     })
    
//     return pq
// };

// const topKFrequent = (nums, k) => {
// 	//build a freq. Map of nums
// 	let map = {}, pairs = [], result = []
    
// 	for (let num of nums) {
// 		if (!map[num]) map[num] = 0
// 		map[num]++
//     } 
    
//     for (let item in map) {
//         pairs.push([item, map[item]]) //[num, count]
//     }
    
//     pairs.sort((a, b) => {return b[1] - a[1]}) // sort by freq. count
//     pairs.length = k
//     pairs.forEach(p => result.push(p[0]))

//     return result
// }

const topKFrequent = (nums, k) => {
    let numMap = new Map(), numPairs = []
    
    for (let num of nums) {
        if (!numMap.has(num)) numMap.set(num, 0)
        numMap.set(num, numMap.get(num) + 1)
    }
    
    for (let [key, value] of numMap) numPairs.push([key, value])
    
    numPairs.sort((a, b) => {return b[1] - a[1]})
    numPairs.length = k
    
    return numPairs.map(num => num[0])
}


