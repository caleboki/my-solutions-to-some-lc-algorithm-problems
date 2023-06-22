// https://leetcode.com/problems/3sum-closest

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function(nums, target) {
    
//     let triplets = []
    
//     const findPairs = (arr, target, left, res) => {
//         let right = arr.length - 1
        
//         while (left < right) {
//             res.push([arr[left-1], arr[left], arr[right]])
//             left++, right--
            
//             while(left < right && arr[left] === arr[left-1]) left++
//             while(left < right && arr[right] === arr[right]) right--
//         }
        
//     }
    
//     for (let i = 0; i < nums.length; i++) {
//         findPairs(nums, target, i+1, triplets)
//     }
    
//     let sums = []
    
//     for (let t of triplets) {
//         sums.push(target - t.reduce((a, b) => a+b, 0))
//     }
//     return Math.min(...sums)
// };


var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a-b)
    
    let minimum = Infinity
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length - 1
        
        while (left < right) {
            let diff = target - nums[i] - nums[left] - nums[right]
            if (diff === 0) return target - diff
            
            if (Math.abs(diff) < Math.abs(minimum)) minimum = diff
            
            // the second part of the following 'if' is to handle the smallest sum when we have             //more than one solution
            if (Math.abs(diff) < Math.abs(minimum) || Math.abs(diff) === Math.abs(minimum) && target > minimum) minimum = diff
            
            
            if (diff > 0) {
                left++
            } else {
                right--
            }
        }
    }
    return target-minimum
};