// https://leetcode.com/problems/3sum-smaller

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//https://leetcode.com/problems/3sum-smaller/solution/
//Two pointer solution

var threeSumSmaller = function(nums, target) {
    nums = nums.sort((a, b) => {
        return (a-b)
    })
    
    let sum = 0
    
    const twoSumSmaller = (nums, startIndex, target) => {
        let sum = 0
        let left = startIndex, right = nums.length-1
        
        while (left < right) {
            if (nums[left] + nums[right] < target) { // found the triplet
                // since arr[right] >= arr[left], therefore, we can replace arr[right] by any                   // number between
                // left and right to get a sum less than the target sum
                sum += right - left
                left++
            } else {
                right--
            }
        }
        return sum
    }
    
    for (let i = 0; i < nums.length - 2; i++) {
        sum += twoSumSmaller(nums, i+1, target-nums[i])
    }
    
    return sum
    
    

    
    
    
};