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

class Solution {
    constructor(nums) {
        this.nums = nums
    }
    
    pick(target) {
        let numsIndexes = []
        
        for (let i in this.nums) {
            if (this.nums[i] === target) numsIndexes[i] = +i
        }
        
        let j = Math.floor(Math.random() * numsIndexes.length)
        
        return numsIndexes[j]
        
        
    }
}