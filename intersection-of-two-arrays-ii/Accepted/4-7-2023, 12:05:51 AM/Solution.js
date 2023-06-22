// https://leetcode.com/problems/intersection-of-two-arrays-ii

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (!nums1.length || !nums2.length) return []

    let result = [], map = {}

    for (let num of nums1) {
        map[num] = map[num] + 1 || 1
    }

    for (let num of nums2) {
        if (map[num]) {
            map[num]--
            result.push(num)
        }
    }

    

    return result
   
};