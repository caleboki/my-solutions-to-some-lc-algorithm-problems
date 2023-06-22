// https://leetcode.com/problems/find-the-difference-of-two-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let answer = [], output = []

    nums1 = new Set(nums1)
    nums2 = new Set(nums2)

    for (let num of nums1) {
        if (!nums2.has(num)) output.push(num)
    }

    answer.push(output)
    output = []

    for (let num of nums2) {
        if (!nums1.has(num)) output.push(num)
    }
    
    answer.push(output)
    return answer
};