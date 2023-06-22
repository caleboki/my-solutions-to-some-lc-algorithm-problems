// https://leetcode.com/problems/kth-largest-element-in-a-stream

/**
 * @param {number} k
 * @param {number[]} nums
 */
// var KthLargest = function(k, nums) {
    
// };

// /** 
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function(val) {
    
// };

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// class KthLargest {
    
//     constructor(k, nums) {
//         this.nums = nums
//         this.k = k
//     }
    
//     add(val) {
//         this.nums.push(val)
        
//         this.nums.sort((a, b) => {return b - a})
      
//         return this.nums[this.k - 1]
//     } 
// }


class KthLargest {
    
    constructor(k, nums) {
        this.nums = nums.sort((a, b) => {return a-b})
        this.k = k
    }
    
    add(val) {
        if (this.nums.length === 0 || val >= this.nums[this.nums.length - 1]) {
            this.nums.push(val)
        } else {
            for (let i = 0; i < this.nums.length; i++) {
                if (val <= this.nums[i]) {
                    this.nums.splice(i, 0, val)
                    break
                }
            }
        }
        return this.nums[this.nums.length - this.k]
    }
    