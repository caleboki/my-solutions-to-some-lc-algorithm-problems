// https://leetcode.com/problems/design-hashset


// var MyHashSet = function() {
    
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.add = function(key) {
    
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.remove = function(key) {
    
// };

// /** 
//  * @param {number} key
//  * @return {boolean}
//  */
// MyHashSet.prototype.contains = function(key) {
    
// };

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

class MyHashSet {
    constructor (key) {
        this.hashset = {}
    }
    
    add(key) {
        this.hashset[key] = true
    }
    
    contains(key) {
        return (key in this.hashset)
    }
    
    remove(key) {
        delete this.hashset[key]
    }
    
    
}