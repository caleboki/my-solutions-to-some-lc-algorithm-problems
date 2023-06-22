// https://leetcode.com/problems/moving-average-from-data-stream

/**
 * Initialize your data structure here.
 * @param {number} size
 */
// var MovingAverage = function(size) {
    
// };

// /** 
//  * @param {number} val
//  * @return {number}
//  */
// MovingAverage.prototype.next = function(val) {
    
// };

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

class MovingAverage {
    constructor(size) {
        this.size = size
        this.data = []
    }
    
    next(val) {
        this.data.push(val)
        
        if (this.data.length > this.size) this.data.shift()
        
        let sum = this.data.reduce((a,b) => a+b, 0)
        let result = sum / this.data.length
        
        return result
    }
}

// class MovingMedian {
//     constructor(size) {
//         this.size = size
//         this.data = []
//     }
    
//     next(val) {
//         this.data.push(val)
        
//         if (this.data.length > this.size) this.data.shift()
        
//         this.data.sort((a, b) => {return a-b})
        
//         let length = this.data.length, mid
        
//         //if odd length
//         if ((length % 2) > 0) {
//             mid = (length-1)/2
//             return this.data[mid]
//         }
        
//         //even length
//         let highMid = this.data.length/2
//         let lowMid = this.data.length/2 - 1
        
//         return (this.data[highMid] + this.data[lowMid])/2
//     }
// }