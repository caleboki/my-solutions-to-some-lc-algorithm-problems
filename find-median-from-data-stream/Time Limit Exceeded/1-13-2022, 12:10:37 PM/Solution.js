// https://leetcode.com/problems/find-median-from-data-stream


// var MedianFinder = function() {
    
// };

// /** 
//  * @param {number} num
//  * @return {void}
//  */
// MedianFinder.prototype.addNum = function(num) {
    
// };

// /**
//  * @return {number}
//  */
// MedianFinder.prototype.findMedian = function() {
    
// };

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class MedianFinder {
    constructor() {
        
        this.data = []
    }
    
    addNum(num) {
        this.data.push(num)
    }
    
    findMedian() {
        this.data.sort((a, b) => {return a-b})
        
        let length = this.data.length, mid
        
        //odd length
        
        if ((length % 2) > 0) {
            mid = (length-1)/2
            return this.data[mid]
        }
        
        //even length
        let high = this.data.length/2, low = this.data.length/2 - 1
        
        return (this.data[high] + this.data[low])/2
        
    }
    
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
}