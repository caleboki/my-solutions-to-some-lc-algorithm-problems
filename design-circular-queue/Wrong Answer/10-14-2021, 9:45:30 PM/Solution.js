// https://leetcode.com/problems/design-circular-queue

// /**
//  * @param {number} k
//  */
// var MyCircularQueue = function(k) {
    
// };

// /** 
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.enQueue = function(value) {
    
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.deQueue = function() {
    
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Front = function() {
    
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Rear = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isEmpty = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isFull = function() {
    
// };

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// class MyCircularQueue {
//     constructor(k) {
//         this.data = []
//         this.p_start = 0
//         this.p_end = 0
//         this.size = k
//     }
    
//     enQueue(value) {
        
//         if (!this.isFull()) {
//             this.data.push(value)
//             this.p_end++
//             return true 
//         }
        
//         if (this.p_start > 0 && this.p_end === this.size - 1) {
//             this.p_end = 0
//             this.data[this.p_end] = value
//             //this.p_end++
//             return true
//         }
        
//         let i = this.p_start - this.p_end
        
//         if (i > 1) {
//             this.data[i-1] = value
//             this.p_end++
//             return true
//         }
//         return false
//     }
    
//     deQueue() {
//         if (!this.isEmpty()) {
//             this.p_start++
//             return true
//         }
        
//     }
    
//     Front() {
//         if (this.isEmpty()) return -1
//         return this.data[this.p_start]
//     }
    
//     Rear() {
//         if (this.isEmpty()) return -1
//         return this.data[this.size - 1] //???
//     }
    
//     isEmpty() {
//         return this.p_start >= this.size
//     }
    
//     isFull() {
//         if (this.p_end === this.size-1 && this.p_start === 0) return true
//         return false
//     }
// }


class MyCircularQueue {
  constructor(k) {
      this.k = k
      this.data = []
  }

  enQueue(value) {
      if (!this.isFull()) {
        this.data.push(value)
        return true
      }
      return false
  }

  deQueue() {
    if (this.isEmpty()) return false
    this.data.shift()
    return true
  }

  Front() {
    if (this.isEmpty()) return -1
    return this.data[0]
  }

  Rear() {
    if (this.isEmpty()) return -1
    return this.data[this.k - 1]
  }

  isEmpty() {
    return this.data.length === 0
  }

  isFull() {
    console.log(this.k === this.data.length)
    return this.k === this.data.length
  }
}


