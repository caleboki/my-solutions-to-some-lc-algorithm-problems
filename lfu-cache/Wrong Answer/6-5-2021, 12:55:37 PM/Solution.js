// https://leetcode.com/problems/lfu-cache

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.useCounter = {};
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1
    
    if (this.useCounter[key] !== undefined) {
        this.useCounter[key] = 1  
    } else {
        this.useCounter[key]++ 
    }
    
    let access = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, access)
    
    return access  
    
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    
    
    if (this.capacity === this.cache.size) {
        let least = Math.min(...Object.values(this.useCounter))
        let leastKeys = Object.keys(this.useCounter).filter(f => f === least)
        
        if (leastKeys.length === 1) {
            this.cache.delete(leastKeys[0])
        } else {
            this.cache.delete(this.cache.keys().next().value)
        }
        this.cache.set(key, value) 
         
    } else {
        if (this.cache.has(key)) {
            this.cache.delete(key)
            this.cache.set(key, value)
        } else {
            this.cache.set(key, value) 
        } 
    }
    
     
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */