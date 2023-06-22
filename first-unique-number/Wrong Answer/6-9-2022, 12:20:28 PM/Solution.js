// https://leetcode.com/problems/first-unique-number

/**
 * @param {number[]} nums
 */
// var FirstUnique = function(nums) {
    
// };

// /**
//  * @return {number}
//  */
// FirstUnique.prototype.showFirstUnique = function() {
    
// };

// /** 
//  * @param {number} value
//  * @return {void}
//  */
// FirstUnique.prototype.add = function(value) {
    
// };

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

class FirstUnique {
    constructor(nums) {
        this.nums = nums
    }
    
    showFirstUnique() {
//         let map = new Map()
        
//         for (let n of this.nums) {
//             if (!map.has(n)) map.set(n, 0)
//             map.set(n, map.get(n) + 1)
            
//         }
        
//         for (let n of this.nums) {
//             if (map.get(n) === 1) return n
//         }
        
//         return -1
        
    }
    
    add(value) {
        this.nums.push(value)
    }
}