// https://leetcode.com/problems/intersection-of-two-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//     let visited = new Set()
//     let unique = new Set()
    
//     for (let i = 0; i < nums1.length; i++) {
//         visited.add(nums1[i])
//     }
    
//     for (let j = 0; j < nums2.length; j++) {
//         if (visited.has(nums2[j])) unique.add(nums2[j])
//     }
//     return [...unique]
// };


var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => {return a-b})
    nums2.sort((a, b) => {return a-b})
    let result = new Set()
    
    const binarySearch = (arr, k) => {
        let l = 0, r = arr.length - 1
        
        while (l <= r) {
            let mid = Math.floor((l+r)/2)
            if (arr[mid] === k) {
                return true
            } else if (k < arr[l]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return false
    }
    
    for (let num of nums1) {
        if (binarySearch(nums2, num) === true) result.add(num)
    }
    
    return [...result]
    
    
};