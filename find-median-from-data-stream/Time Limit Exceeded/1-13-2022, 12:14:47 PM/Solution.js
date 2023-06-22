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
        this.size = 0
    }
    
    addNum(num) {
        this.data.push(num)
        this.size++
    }
    
    findMedian() {
        this.data.sort((a, b) => {return a-b})
        
        let mid
        
        //odd length
        
        if ((this.size % 2) > 0) {
            mid = (this.size-1)/2
            return this.data[mid]
        }
        
        //even length
        let high = this.size/2, low = this.size/2 - 1
        
        return (this.data[high] + this.data[low])/2
        
    }
    

}