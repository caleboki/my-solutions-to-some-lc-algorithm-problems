// https://leetcode.com/problems/median-of-two-sorted-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let num = [...nums1, ...nums2]
    
    num.sort((a, b) => {return a-b})
   
    if (num.length % 2 > 0) return num[(num.length-1)/2]
    return (num[(num.length/2)] + num[(num.length/2) - 1])/2
    
};