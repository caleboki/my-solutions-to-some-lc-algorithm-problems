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
        this.key[key] = key
        this.value[this.key.indexOf(key)] = value
    }
    
    get (key) {
        if (this.key[key] === undefined) return -1
        return this.value[this.key.indexOf(key)]
        
    }
    
    remove (key) {
        if (this.key[key] !== undefined) {
            this.key.splice(key, 1)
            this.value.splice(this.key.indexOf(key), 1)   
        }
        
    }
}