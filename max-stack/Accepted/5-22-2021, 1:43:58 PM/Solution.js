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
        console.log(this.storage)
    }
    
    pop() {
        return this.storage.pop()
    }
    
    top() {
        //console.log(this.storage)
        return this.storage[this.storage.length - 1]
    }
    
    peekMax () {
        console.log(Math.max(this.storage))
        return Math.max(...this.storage)
    }
    
    popMax() {
        
        let maxValue = -10000000
        let maxIndex = 0
        
        for (let i = 0; i<this.storage.length; i++){
            if (this.storage[i] >= maxValue) {
                maxValue = this.storage[i]
                maxIndex = i
            }
        }
        console.log(this.storage[maxIndex])
        
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