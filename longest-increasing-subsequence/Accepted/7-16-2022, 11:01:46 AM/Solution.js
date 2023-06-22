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
    
    let sub = [nums[0]]
    
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]
        if (num > sub[sub.length - 1]) {
            sub.push(num)  
        } else {
            let j = binarySearch(sub, num)
            sub[j] = num
        } 
    }
    return sub.length
};

// const lengthOfLIS = (nums) => {
//   let sub = [nums[0]]
  
//   for (let i = 1; i < nums.length; i++) {
//       let num = nums[i]
      
//       if (num > sub[sub.length - 1]) {
//           sub.push(num)
//       } else {
//           let j = 0
          
//           while (num > sub[j]) j++
//           sub[j] = num
//       }
//   }
    
//     return sub.length
// }