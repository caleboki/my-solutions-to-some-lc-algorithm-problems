// https://leetcode.com/problems/intersection-of-two-arrays-ii

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (!nums1.length || !nums2.length) return []
    nums1 = nums1.sort((a, b) => a-b)
    nums2 = nums2.sort((a, b) => a-b)

    let result = []

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                result.push(nums1[i])
                break
            }
        }
    }

    return result
   
};