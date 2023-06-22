// https://leetcode.com/problems/random-pick-with-weight

/**
 * @param {number[]} w
 */
// var Solution = function(w) {
    
// };

// /**
//  * @return {number}
//  */
// Solution.prototype.pickIndex = function() {
    
// };

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

class Solution {
    constructor(w) {
        this.prefixSums = [], this.prefixSum = 0
        
        for (let i = 0; i < w.length; i++) {
            this.prefixSum += w[i]
            this.prefixSums[i] = this.prefixSum
        }
        this.totalSum = this.prefixSum
        console.log(this.prefixSums)
        
    }
    
    pickIndex() {
        let target = this.totalSum * Math.random()
        let i = 0
        
        for (let i = 0; i < this.prefixSums.length; i++) {
            if (target < this.prefixSums[i]) return i
            
        }
        return i-1
        
        
        
        
    }
}