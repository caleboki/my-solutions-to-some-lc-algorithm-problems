// https://leetcode.com/problems/insert-delete-getrandom-o1

class RandomizedSet {
    constructor() {
        this.data = [];
    }
    
    insert (val) {
       
        if (this.data.includes(val)) return false;
        this.data.push(val);
        return true;
    }
    
    remove (val) {
        let item = this.data.find(element => element === val);
        
        if (typeof item === 'undefined') return false;
        
        if (this.data.indexOf(val) === this.data[this.data.length - 1]) {
            this.data.pop();
            return true;
        }
        
        let last = this.data[this.data.length - 1];
        let currentIndex = this.data.indexOf(val);
        
        [this.data[currentIndex], last] = [last, this.data[currentIndex]];
        this.data.pop();
        
        return true; 
    }
    
    getRandom(){

        let randomIndex = Math.floor(Math.random() * (this.data.length));
        return this.data[randomIndex];
    }
}


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */