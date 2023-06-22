// https://leetcode.com/problems/longest-increasing-subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const binarySearch = (arr, num) => {
        let left = 0, right = arr.length - 1
        
        while (left < right) {
            let mid = Math.floor((left + right)/2)
            if (arr[mid] === num) return mid
            
            if (arr[mid] < num) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return left
    }
    
    let result = []
    result.push(nums[0])
    
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]
        if (num > result[result.length - 1]) {
            result.push(num)  
        } else {
            let j = binarySearch(result, num)
            result[j] = num
        }
        console.log(result)
        
    }
    
    return result.length
    
};