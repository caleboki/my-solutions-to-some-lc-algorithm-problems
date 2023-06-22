// https://leetcode.com/problems/find-the-duplicate-number

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function(nums) {
//     nums.sort(function (a, b) {
//         return a-b
//     })
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i-1] || nums[i] === nums[i+1]) return nums[i]
//     }
// };

var findDuplicate = function(nums) {
    let l = 1, r = nums.length - 1
    let duplicate = -1
    
    while (l <= r) {
        let mid = (l + (r-l))/2
        
        let count = 0
        for(num of nums) {
            if (num <= mid) count++
        }
        
        if (count > mid) {
            duplicate = mid
            r = mid - 1
            //break
        } else {
            l = mid + 1
        }
    }
    
    return duplicate
    
};