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
        this.w = w
    }
    
    pickIndex() {
        let a = []
        
        for (let num of this.w) {
            for (let i = 0; i < num; i++) {
                a.push(num)
            }
        }
        if (a.length === 1) return 0
        return a[Math.floor(Math.random()*a.length)]/a.length
        
        
        
    }
}