// https://leetcode.com/problems/two-sum-iii-data-structure-design


// var TwoSum = function() {
    
// };

// /** 
//  * @param {number} number
//  * @return {void}
//  */
// TwoSum.prototype.add = function(number) {
    
// };

// /** 
//  * @param {number} value
//  * @return {boolean}
//  */
// TwoSum.prototype.find = function(value) {
    
// };

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

class TwoSum {
    constructor() {
        this.data = []
    }
    
    add(number) {
        this.data.push(number)
    }
    
    find(value) {
        
        const twoSum = (nums, target) => {
            const pairs = new Map()

            for (let i in nums) {
                if (pairs.has(nums[i])) return true
                let key = target - nums[i]
                pairs.set(key, i)
            }

            return false
        }
        
        return twoSum(this.data, value)
    }
}