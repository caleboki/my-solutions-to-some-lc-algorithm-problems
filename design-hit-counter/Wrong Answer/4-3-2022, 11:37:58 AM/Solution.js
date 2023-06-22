// https://leetcode.com/problems/design-hit-counter


// var HitCounter = function() {
    
// };

// /** 
//  * @param {number} timestamp
//  * @return {void}
//  */
// HitCounter.prototype.hit = function(timestamp) {
    
// };

// /** 
//  * @param {number} timestamp
//  * @return {number}
//  */
// HitCounter.prototype.getHits = function(timestamp) {
    
// };

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

class HitCounter  {
    constructor() {
        this.data = []
    }
    
    hit(timestamp) {
        this.data.push(timestamp)
    }
    
    getHits(timestamp) {
//         let i = 0
//         while(this.data.length) {
//             let diff = timestamp - this.data[0]
//             if (diff >= 300) {
//                 //this.data = this.data.filter(f => f!==i)
//                 this.data.splice(i, 1)
//             } else {
//                 break
//             }
//             i++
            
//         }
        
        for (let i = 0; i < this.data.length-1; i++) {
            let diff = timestamp - this.data[0]
            if (diff >= 300) {
                this.data.splice(i, 1)
            } else {
                break
            }
        }
        return this.data.length
        
    }
}