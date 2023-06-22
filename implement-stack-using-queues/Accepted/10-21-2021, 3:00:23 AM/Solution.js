// https://leetcode.com/problems/implement-stack-using-queues


// var MyStack = function() {
    
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
    
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
    
// };

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

class MyStack {
    constructor() {
        this.data = []
    }
    
    push(x) {
        this.data.push(x)
    }
    
    pop() {
        return this.data.pop()
    }
    
    top() {
        return this.data[this.data.length - 1]
    }
    
    empty() {
        return this.data.length === 0
    }
}

