// https://leetcode.com/problems/design-hashmap



/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

class MyHashMap {
    constructor() {
        this.key = []
        this.value = []
    }
    
    put (key, value) {
        if (this.key[key] === undefined) {
            this.value.push(value)
            this.key[key] = this.value.length - 1
            
        } else {
            this.value[this.key[key]] = value
            
        }
        
    }
    
    get (key) {
        if (this.key[key] === undefined) return -1
        return this.value[this.key[key]]
        
    }
    
    remove (key) {
        if (this.key[key] !== undefined) {
            this.value[this.key[key]] = undefined 
            this.key[key] = undefined
        }
        
    }
}