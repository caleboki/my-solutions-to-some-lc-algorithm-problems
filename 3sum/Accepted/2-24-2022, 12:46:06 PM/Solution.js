// https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //sorting required to check for duplicates more efficiently as duplicates would be adjacent    //to each other
    
    nums = nums.sort((a, b) => {
        return (a-b)
    })
    
    const res = []
    
    const twoSum = (pos) => {
        const seen = new Set()
        
        for (let j = pos + 1; j < nums.length; j++) {
            
            //checking if value is in map/set and making sure of no duplicates in next                     // value (j+1)
            
            if (seen.has(nums[j]) && nums[j] !== nums[j+1]) {
                res.push([nums[pos], nums[j], -nums[pos]-nums[j]])
            }
            seen.add(-nums[pos]-nums[j])
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        //if (nums[i] > 0) continue
        if (nums[i] === nums[i-1]) continue //checking for duplicates in previous value
        
        twoSum(i)
    }
    
    return res
};

// var threeSum = function(nums) {
//     nums.sort((a, b) => a-b)
    
//     const triplets = []
    
//     const findPairs = (arr, target, left, res) => {
//         let right = arr.length - 1
        
//         while (left < right) {
//             let current = arr[left] + arr[right]
            
//             if (current === target) {
//                 res.push([-target, arr[left], arr[right]])
                
//                 left++, right++
                
//                  //skip elements to avoid duplicates
//                 while(left < right && arr[left] === arr[left-1]) left++
                
//                 while(left < right && arr[right] === arr[right+1]) right--
//             }
            
//             if (target > current) left++ // we need a pair with a bigger sum
//             if (target < current) right-- // we need a pair with a bigger sum
//         }
//     }
    
//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i-1]) continue //avoid duplicate
        
//         findPairs(nums, -nums[i], i+1, triplets)
//     }
//     return triplets
// }
