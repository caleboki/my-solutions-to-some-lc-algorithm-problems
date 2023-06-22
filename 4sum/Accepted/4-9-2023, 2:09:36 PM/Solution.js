// https://leetcode.com/problems/4sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function(nums, target) {
    nums.sort((a, b) => {
        return (a-b)
    })
    
    return kSum(nums, target, 0, 4)  
}

function kSum(nums, target, start, k) {
    let res = []
    
    // if (start === nums.length || nums[start]*k > target || target > nums[nums.length - 1]*k){
    //     return res
    // }
    
    if (k === 2) return twoSum(nums, target, start)
    
    for (let i = start; i < nums.length; i++){
        if (i === start || nums[i-1] !== nums[i]) {
            for (let subset of kSum(nums, target - nums[i], i+1, k-1)) {
                subset.push(nums[i])
                res.push(subset)
            }
        }
    }
    return res
}

function twoSum(nums, target, start) {
    let res = []
    let s = new Set()
    for (let i = start; i < nums.length; i++) {
        if (!res.length || res[res.length-1][1] !== nums[i]) {
            if (s.has(target - nums[i])) res.push([target - nums[i], nums[i]])
            s.add(nums[i])
        }
    }
    return res
}


// const fourSum = (nums, target) => {
//     nums.sort((a, b) => {
//         return (a-b)
//     })
//     const result = []
//     const findTriplets = (arr, target, left, mid, res) => {
//         let right = arr.length - 1

//         while (left < mid && left < right) {
//             let current = arr[left] + arr[mid] + arr[right]
//             if (current === target) {
//                 res.push([-target, arr[left], arr[mid], arr[right]])
//                 left++, mid++, right++

//                 while(left < mid && left < right && arr[mid] === arr[left]) {
//                     left++
//                     mid++
//                 }

//                 while(left < mid && left < right && arr[mid] === arr[right]) {
//                     right--
//                     mid--
//                 }

//                 if (target > current) {
//                     mid++
//                     left++
//                 }

//                 if (target < current) {
//                     mid--
//                     right--
//                 }
//             }
//         } 
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i-1]) continue
//         findTriplets(nums, -target-nums[i], i+1, i+2, result)
//     }
//     return result
// }

