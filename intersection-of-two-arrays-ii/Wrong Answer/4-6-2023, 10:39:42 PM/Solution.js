// https://leetcode.com/problems/intersection-of-two-arrays-ii

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [], nums2Map = new Map()

    for (let i of nums2) {
        nums2Map.set(i, true)
    }

    for (let num of nums1) {
        if (nums2Map.has(num)) result.push(num)
    }

    return result
};