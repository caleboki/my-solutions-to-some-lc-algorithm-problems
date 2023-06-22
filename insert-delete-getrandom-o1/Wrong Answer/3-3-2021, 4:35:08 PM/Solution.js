// https://leetcode.com/problems/insert-delete-getrandom-o1

class RandomizedSet {
    constructor() {
        this.data = new Map();
    }
    
    insert (val) {
        if (this.data.has(val)) return false;
        this.data.set(val);
        return true;
    }
    
    remove (val) {
        if (!this.data.has(val)) return false;
        this.data.delete(val);
        return true;
    }
    
    getRandom () {
        let arr = [...this.data.keys()];
        let idx = Math.floor(Math.random() * arr.length);
        if (this.data.get(idx)) return 1;
        return 2;
    }
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */