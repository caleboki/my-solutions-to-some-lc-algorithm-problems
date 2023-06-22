// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
//     let result = []
    
//     for (let i in nums) {
//         if (nums[i] === target) result.push(i)
//     }
    
//     if (result.length === 0) return [-1, -1]
    
//     result = [result[0], result[result.length - 1]]
    
//     return result
// };

var searchRange = function(nums, target) {
    
    const binarySearch = (nums, target) => {
        let l = 0, r = nums.length - 1, result = []
        
        while (l <= r) {
            let mid = Math.floor((l+r)/2)
            if (nums[mid] === target) {
                
                result.push(mid)
                
                if(nums[mid-1] === target) {
                    console.log('g')
                    let n = mid - 1
                    while (n >= 0 && nums[n] === target) {
                        result.unshift(n)
                        n--
                    } 
                }
                
                if(nums[mid+1] === target) {
                    let n = mid + 1
                    console.log(n)
                    while (n < nums.length && nums[n] === target) {
                        result.push(n)
                        n++
                    } 
                }
                

                
                return [result[0], result[result.length - 1]]
                
                
                
                
            } else if(target < nums[mid]) {
                r = mid - 1  
            } else {
                l = mid + 1
            }
        }
        return [-1, -1]
        
    }
    return binarySearch(nums, target)
};