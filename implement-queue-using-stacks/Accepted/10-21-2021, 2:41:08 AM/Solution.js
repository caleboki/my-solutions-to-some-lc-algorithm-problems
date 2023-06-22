// https://leetcode.com/problems/implement-queue-using-stacks


// var MyQueue = function() {
    
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
    
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
    
// };

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class MyQueue {
    
    constructor() {
        this.data = []
    }
    
    push(x) {
        this.data.push(x)
    }
    
    pop(x) {
        return this.data.shift()
    }
    
    peek() {
        return this.data[0]
    }
    
    empty() {
        return this.data.length === 0
    }
    
    
}