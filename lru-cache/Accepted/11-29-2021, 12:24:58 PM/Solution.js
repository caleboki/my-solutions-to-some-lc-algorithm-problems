// https://leetcode.com/problems/lru-cache

/**
 * @param {number} capacity
 */
// var LRUCache = function(capacity) {
//     this.capacity = capacity;
//     this.cache = new Map();
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {

//    if (!this.cache.has(key)) return -1
    
//     //delete the key from the Map, and add it again, so that it is added at the end of the Map
// 	// this key will be recently used, hence will be evicted last in case of cache filled      //capacity
    
//     let access = this.cache.get(key)
//     this.cache.delete(key)
//     this.cache.set(key, access)
   
//     return access   
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
    
//     //delete the key from the Map, and add it again, so that it is added at the end of the Map
// 	// this key will be recently used, hence will be evicted last in case of cache filled      //capacity
    
//     if (this.cache.has(key)) {
//         this.cache.delete(key)
//         this.cache.set(key, value)
//     } else {
//        this.cache.set(key, value) 
//     }  
  
//     if(this.cache.size > this.capacity) this.cache.delete(this.cache.keys().next().value)
    
// };

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
    }
    
    get(key) {
        if (!this.cache.has(key)) return -1
        
    //delete the key from the Map, and add it again, so that it is added at the end of the Map
    // this key will be recently used, hence will be evicted last in case of cache filled           //capacity
        
        let access = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, access)
        
        return access
    }
    
    put(key, value) {
        //delete the key from the Map, and add it again, so that it is added at the end of the Map
    // this key will be recently used, hence will be evicted last in case of cache filled           //capacity
        
        if (this.cache.has(key)) {
            this.cache.delete(key)
            this.cache.set(key, value)
        } else {
            this.cache.set(key, value)
        }
        
        if (this.cache.size > this.capacity) this.cache.delete(this.cache.keys().next().value)
    }
        
    
    
        
}