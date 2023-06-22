// https://leetcode.com/problems/design-phone-directory

/**
 * @param {number} maxNumbers
 */
// var PhoneDirectory = function(maxNumbers) {
    
// };

// /**
//  * @return {number}
//  */
// PhoneDirectory.prototype.get = function() {
    
// };

// /** 
//  * @param {number} number
//  * @return {boolean}
//  */
// PhoneDirectory.prototype.check = function(number) {
    
// };

// /** 
//  * @param {number} number
//  * @return {void}
//  */
// PhoneDirectory.prototype.release = function(number) {
    
// };

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */

class PhoneDirectory {
    constructor(maxNumbers) {
        this.map = {}
        
        for (let i = 0; i < maxNumbers; i++) {
            this.map[i] = true
        } 
    }
    
    get() {
        let ava = Object.keys(this.map).filter(f => this.map[f] === true)
   
        if (ava.length === 0) return -1
        this.map[ava[0]] = false
        return ava[0]
    }
    
    check(number) {
        if (!this.map[number] || this.map[number] === undefined) return false
        return this.map[number]
    }
    
    release(number) {
        this.map[number] = true
    }
}