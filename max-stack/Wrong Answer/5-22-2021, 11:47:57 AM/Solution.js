// https://leetcode.com/problems/max-stack

/**
 * initialize your data structure here.
 */
class MaxStack {
    constructor() {
        this.storage = []
    }
    
    push(x) {
        this.storage.push(x)
    }
    
    pop() {
        return this.storage.pop()
    }
    
    top() {
        return this.storage[this.storage.length - 1]
    }
    
    peekMax () {
        return Math.max(...this.storage)
    }
    
    popMax() {
        let maxValue = Number.MIN_VALUE
        let maxIndex = 0
        
        for (let i = 0; i<this.storage.length; i++){
            if (this.storage[i] >= maxValue) {
                maxValue = this.storage[i]
                maxIndex = i
            }
        }
        return this.storage.splice(maxIndex, 1)
    }
}
/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */