// https://leetcode.com/problems/find-peak-element

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > nums[i+1]) return i
//     }
//     return nums.length - 1
// };

//we can use binary search without sorting the whole array because we are only comparing two numbers which are 
// trivially  sorted

const findPeakElement = (nums) => {
    let left = 0, right = nums.length - 1
    
    while(left < right) {
        let mid = Math.floor((left + right)/2)
        if (nums[mid] > nums[mid + 1]) {
            right = mid  
        } else {
            left = mid + 1
        }
    }
    return left
}