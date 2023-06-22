// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     const pairs = {}, len = nums.length
    
//     for (let i = 0; i < len; i++) {
//         if (nums[i] in pairs) return [pairs[nums[i]], i]
        
//         pairs[target-nums[i]] = i
//     }
// };

// const twoSum = (nums, target) => {
//     const pairs = {}
    
//     for (let i in nums) {
//         if (nums[i] in pairs) return [pairs[nums[i]], i]
        
//         pairs[target - nums[i]] = i
//     }
// }


const twoSum = (nums, target) => {
    
    const binarySearch = (arr, k) => {
        let l = 0, r = arr.length - 1
        
        while (l <= r) {
            let mid = Math.floor((l+2)/2)
            if (arr[mid] === k) {
                return [true, mid]
            } else if (k < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        
        return [false, -1]
    }
    
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i]
        let isFound = binarySearch(nums.slice(i), n)
        if (isFound[0] && isFound[1]) return [i, isFound[1]]
    }
    
}
