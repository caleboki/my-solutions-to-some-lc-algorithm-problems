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
        this.prefixSums = [], this.sum = 0
        
        for (let i = 0; i < w.length; i++) {
            this.sum += w[i]
            this.prefixSums[i] = this.sum
        }
    }
    
    pickIndex() {
        let target = Math.random() * this.sum
        
        //for (let i = 0; i < this.prefixSums.length; i++) if (target < this.prefixSums[i]) return i
        
        const binarySearch = (arr, t) => {
            let l = 0, r = arr.length - 1
            
            while (l < r) {
                let mid = Math.floor((l+r)/2)
                
                if (t > arr[mid]) {
                    l = mid + 1
                } else {
                    r = mid
                }
            }
            return l
        }
        return binarySearch(this.prefixSums, target)
    }
}