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

// class ProductOfNumbers {
//     constructor() {
//         this.data = []
//     }
    
//     add(num) {
//         this.data.push(num)
//     }
    
//     getProduct(k) {
//         let product = 1
        
//         for (let i = (this.data.length - 1); i >= 0; i--) {
//             k--
//             product = product * this.data[i] 
//             if (k === 0) break
//         }
//         return product
//     }
// }

class ProductOfNumbers {
    constructor() {
        this.data = [1]
    }
    
    add(num) {
        if (num === 0) {
            this.data = [1]
        } else {
            this.data.unshift(num * this.data[0])
        }
    }
    
    getProduct(k) {
        return (this.data[0]/this.data[k]) || 0
    }
}