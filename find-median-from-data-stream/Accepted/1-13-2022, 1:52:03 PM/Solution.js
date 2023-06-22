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

// class MedianFinder {
//     constructor() {
//         this.data = []
//     }
    
//     addNum(num) {
//         if (this.data.length === 0) {
//             this.data.push(num)
//             return
//         }
        
//         let left = 0, right = this.data.length
        
//         while (left < right) {
//             const mid = Math.floor((left + right)/2)
            
//             if (num > this.data[mid]) {
//                 left = mid + 1
//             } else {
//                 right = mid
//             }
//         }
        
//         this.data.splice(left, 0, num)
//     }
    
//     findMedian() {
//         this.data.sort((a, b) => {return a - b})
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
        // set up array
        this.arr = [];
    }
	
    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // check if array is size 0, just push
        if (this.arr.length === 0) {
            this.arr.push(num);
            return;
        }
		
        // left and right pointers for binary search
        let l = 0;
        let r = this.arr.length;
		
        // keep going until pointers meet
        while (l < r) {
            // get mid point
            const mid = Math.floor((l + r) / 2);
            // check if we can insert at mid
            if (num > this.arr[mid]) {
                // search right half of array
                l = mid + 1;
            } else {
                // search left half of array
                r = mid;
            }
        }
		
        // we can insert at left pointer
        this.arr.splice(l, 0, num);
    }
	
    /**
     * @return {number}
     */
    findMedian() {
        // if odd, return middle, if even, return avg of two middle
        const mid = Math.floor(this.arr.length / 2);
        return (this.arr.length & 1) === 1
            ? this.arr[mid]
            : (this.arr[mid] + this.arr[mid - 1]) / 2;
    }
}