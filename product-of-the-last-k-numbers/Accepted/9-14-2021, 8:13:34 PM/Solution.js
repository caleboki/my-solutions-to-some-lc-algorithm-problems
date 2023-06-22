// https://leetcode.com/problems/product-of-the-last-k-numbers


// var ProductOfNumbers = function() {
    
// };

// /** 
//  * @param {number} num
//  * @return {void}
//  */
// ProductOfNumbers.prototype.add = function(num) {
    
// };

// /** 
//  * @param {number} k
//  * @return {number}
//  */
// ProductOfNumbers.prototype.getProduct = function(k) {
    
// };

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

class ProductOfNumbers {
    constructor() {
        this.data = []
    }
    
    add(num) {
        this.data.push(num)
    }
    
    getProduct(k) {
        
        let product = 1
        
        for (let i = (this.data.length - 1); i >= 0; i--) {
            k--
            //console.log(this.data[i])
            product = product * this.data[i] 
            if (k === 0) break
        }
        
        return product
    }
}