// https://leetcode.com/problems/random-pick-index

/**
 * @param {number[]} nums
 */
// var Solution = function(nums) {
    
// };

// /** 
//  * @param {number} target
//  * @return {number}
//  */
// Solution.prototype.pick = function(target) {
    
// };

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

// class Solution {
//     constructor(nums) {
//         this.nums = nums
//     }
    
//     pick(target) {
//         let numsIndexes = []
        
//         for (let i in this.nums) {
//             if (this.nums[i] === target) numsIndexes.push(i)
//         }
        
//         let j = Math.floor(Math.random() * numsIndexes.length)
        
//         return numsIndexes[j]
//     }
// }

// class Solution {
//     constructor(nums) {
//         this.numsIndexes = {}
        
//         for (let i in nums) {
//             if (!(nums[i] in this.numsIndexes)) {
//                 this.numsIndexes[nums[i]] = []
//             }
//             this.numsIndexes[nums[i]].push(i)
//         }
//     }
    
//     pick(target) {
//         let l = Object.keys(this.numsIndexes[target]).length
       
//         return this.numsIndexes[target][Math.floor(Math.random() * l)]
        
//     }
// }

class Solution {
    constructor(nums) {
        this.nums = nums
    }
    
    pick(target) {
        let count = 0, index = 0
        
        for (let i in this.nums) {
            if (this.nums[i] === target) {
                count++
                
                if (Math.floor(Math.random() * count) === 0) {
                    index = +i
                }
                
                
            }
        }
        
        return index
    }
}