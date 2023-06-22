// https://leetcode.com/problems/intersection-of-two-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let visited = new Set()
    let unique = new Set()
    
    for (let i = 0; i < nums1.length; i++) {
        visited.add(nums1[i])
    }
    
    for (let j = 0; j < nums2.length; j++) {
        if (visited.has(nums2[j])) unique.add(nums2[j])
    }
    return [...unique]
};