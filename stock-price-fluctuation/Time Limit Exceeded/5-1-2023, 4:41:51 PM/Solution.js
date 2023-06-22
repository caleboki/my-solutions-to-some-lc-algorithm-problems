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

// class StockPrice {
//     constructor() {
//         this.data = {}
//     }
//     update(timestamp, price) {
//         this.data[timestamp] = price
//     }
//     current() {
//         const keys = Object.keys(this.data)
//         const key = Math.max(...keys)
//         return this.data[key]
//     }
//     maximum() {
//         return Math.max(...Object.values(this.data))
//     }
//     minimum() {
//         return Math.min(...Object.values(this.data))
//     }
// }

class StockPrice {
    constructor() {
        this.data = {}
        this.latestTimestamp = -1
        this.maxPrice = -Infinity
        this.minPrice = Infinity
    }

    update(timestamp, price) {
        if (this.data[timestamp] !== undefined) {
            const oldPrice = this.data[timestamp]
            if (oldPrice === this.maxPrice || oldPrice === this.minPrice) {
                this.maxPrice = -Infinity
                this.minPrice = Infinity
                for (const ts in this.data) {
                    if (parseInt(ts) !== timestamp) {
                        this.maxPrice = Math.max(this.maxPrice, this.data[ts])
                        this.minPrice = Math.min(this.minPrice, this.data[ts])
                    }
                }
            }
        }

        this.data[timestamp] = price
        this.latestTimestamp = Math.max(this.latestTimestamp, timestamp)
        this.maxPrice = Math.max(this.maxPrice, price)
        this.minPrice = Math.min(this.minPrice, price)
    }

    current() {
        return this.data[this.latestTimestamp]
    }

    maximum() {
        return this.maxPrice
    }

    minimum() {
        return this.minPrice
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