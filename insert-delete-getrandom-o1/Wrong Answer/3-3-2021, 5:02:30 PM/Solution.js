// https://leetcode.com/problems/insert-delete-getrandom-o1

class RandomizedSet {
    constructor() {
        this.data = new Map();
        this.k = 0;
        this.keys = [];
    }
    
    insert (val) {
        if (this.data.has(val)) return false;
        this.k++;
        this.keys.push(this.k);
        this.data.set(this.k, val);
        
        return true;
    }
    
    remove (val) {
        if (!this.data.has(val)) return false;
        this.data.delete(val);
        return true;
    }
    
    getRandom () {
        console.log(this.keys)
        
        // let arr = [...this.data.values()];
        // console.log(arr);
        // let idx = Math.floor(Math.random() * this.data.keys().length);
        return (this.data.get(this.k));
        
        
    }
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */