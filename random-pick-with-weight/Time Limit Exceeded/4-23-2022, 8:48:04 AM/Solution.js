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
        
    }
    
    pickIndex() {
        let target = this.totalSum * Math.random()
        
        // for (let i = 0; i < this.prefixSums.length; i++) {
        //     if (target < this.prefixSums[i]) return i
        // }
        // return i-1
        
        const binarySearch = (arr, t) => {
            let l = 0, r = arr.length - 1, mid
            
            while (l <= r) {
                mid = Math.floor((l+r)/2)
                
                if (t < arr[mid]) {
                    return mid
                } else if (t > arr[mid]) {
                    l = mid
                } else {
                    r = mid
                }
            }
            
            return mid
        }
        
        return binarySearch(this.prefixSums, target)
        
        
        
        
    }
}