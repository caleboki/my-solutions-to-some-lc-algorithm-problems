// https://leetcode.com/problems/stock-price-fluctuation


// var StockPrice = function() {
    
// };

// /** 
//  * @param {number} timestamp 
//  * @param {number} price
//  * @return {void}
//  */
// StockPrice.prototype.update = function(timestamp, price) {
    
// };

// /**
//  * @return {number}
//  */
// StockPrice.prototype.current = function() {
    
// };

// /**
//  * @return {number}
//  */
// StockPrice.prototype.maximum = function() {
    
// };

// /**
//  * @return {number}
//  */
// StockPrice.prototype.minimum = function() {
    
// };

class StockPrice {
    constructor() {
        this.data = {}
        this.min = Infinity
    }
    update(timestamp, price) {
        this.data[timestamp] = price
        this.min = Math.min(this.min, this.data[timestamp])
    }
    current() {
        const keys = Object.keys(this.data)
        const key = Math.max(...keys)
        return this.data[key]
    }
    maximum() {
        return Math.max(...Object.values(this.data))
    }
    minimum() {
        console.log(this.min)
        return this.min
        return Math.min(...Object.values(this.data))
    }
}

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */