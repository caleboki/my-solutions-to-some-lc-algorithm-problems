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
        this.prevMin = Infinity
        this.min = Infinity
    }
    
    push(val) {
        this.data.push(val)
        this.prevMin = this.min
        this.min = Math.min(this.min, val)
    }
    
    pop() {
        let cur = this.data.pop()
        if (this.min === cur) this.min = this.prevMin
    }
    
    top() {
        return this.data[this.data.length - 1]
    }
    
    getMin() {
        //return Math.min(...this.data)
        return this.min
    }
}