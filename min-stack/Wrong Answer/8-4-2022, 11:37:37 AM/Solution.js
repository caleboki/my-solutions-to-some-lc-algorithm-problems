// https://leetcode.com/problems/min-stack


// var MinStack = function() {
    
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
    
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
    
// };

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

class MinStack {
    constructor() {
        this.data = []
        this.min = []
    }
    
    push(val) {
        this.data.push(val)
        
        if (this.min.length) {
            this.min.push(val)
        } else if (this.min[this.min.length - 1] >= val) {
            this.min.push(val)
        } 
    }
    
    pop() {
        let cur = this.data.pop()
        if (cur === this.min[this.min.length - 1]) this.min.pop()
    }
    
    top() {
        return this.data[this.data.length - 1]
    }
    
    getMin() {
        return this.min[this.min.length - 1]
    }
}