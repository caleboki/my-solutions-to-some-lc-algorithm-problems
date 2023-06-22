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

// class MedianFinder {
//     constructor() {
//         this.data = []
//     }
    
//     addNum(num) {
//         //this.data.push(num)
        
//         if (this.data.length === 0) {
//             this.data.push(num)
//         } else {
//             if (num > this.data[this.data.length - 1]) {
//                 this.data.push(num)
//             } else {
//                 this.data.unshift(num)
//             }
//         }
//     }
    
//     findMedian() {
//         //this.data.sort((a, b) => {return a-b})
        
//         let length = this.data.length, mid
        
//         //odd length
//         if ((length % 2) > 0) {
//             mid = (length-1)/2
//             return this.data[mid]
//         }
//         //even length
//         let high = this.data.length/2, low = this.data.length/2 - 1
        
//         return (this.data[high] + this.data[low])/2
//     }
// }

class MedianFinder {
    constructor() {
        this.data = []
    }
    
    addNum(num) {
        if (this.data.length === 0) {
            this.data.push(num)
            return
        }
        
        let left = 0, right = this.data.length
        
        while (left < right) {
            const mid = Math.floor((left + right)/2)
            
            if (num > this.data[mid]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        
        this.data.splice(left, 0, num)
    }
    
    findMedian() {
        this.data.sort((a, b) => {return a - b})
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
}