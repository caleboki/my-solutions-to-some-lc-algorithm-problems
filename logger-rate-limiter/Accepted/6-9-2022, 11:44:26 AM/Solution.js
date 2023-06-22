// https://leetcode.com/problems/logger-rate-limiter

/**
 * Initialize your data structure here.
 */
// var Logger = function() {
    
// };

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
// Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    
// };

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

class Logger {
    constructor() {
        this.data = new Map()
    }
    
    shouldPrintMessage(timestamp, message) {
        let returnedValue = true
        
        if (!this.data.has(message)) {
            this.data.set(message, timestamp)
        } else {
            let diff = timestamp - this.data.get(message)
            if (diff < 10) {
                returnedValue = false
            } else {
                this.data.set(message, timestamp)
            }
        }
        return returnedValue
    }
}