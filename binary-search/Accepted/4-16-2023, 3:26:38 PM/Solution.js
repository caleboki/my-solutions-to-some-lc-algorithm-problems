// https://leetcode.com/problems/binary-search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     let l = 0, r = nums.length - 1, mid
    
//     while (l <= r) {
//         mid = Math.floor((l+r)/2)
        
//         if (nums[mid] === target) {
//             return mid
//         } else if (target < nums[mid]) {
//             r = mid - 1
//         } else {
//             l = mid + 1
//         }
//     }
//     return -1
// };

const search = (nums, target) => {
    const binarySearch = (array, x, left, right) => {
        if (left > right) return -1
        let mid = Math.floor((left + right)/2)
        
        if (array[mid] === x) return mid
        if (x < array[mid]) return binarySearch(array, x, left, mid-1)
        if (x > array[mid]) return binarySearch(array, x, mid+1, right)
    }

    return binarySearch(nums, target, 0, nums.length-1)
}