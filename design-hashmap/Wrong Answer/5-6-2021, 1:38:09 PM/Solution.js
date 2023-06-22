// https://leetcode.com/problems/design-hashmap

/**
 * Initialize your data structure here.
 */
// class MyHashMap  {
//     constructor () {
//         this.indexArr = [];
//         this.valueArr = [];
//     }
    
//     put (key, value) {
//         if (this.indexArr[key] === undefined) {
//             this.valueArr.push(value);
//             this.indexArr[key] = this.valueArr.length - 1;
//         }else {
//             this.valueArr[this.indexArr[key]] = value;
//         }
    
//     };
    
//     get (key) {
//         if (this.indexArr[key] === undefined) return -1;
//         return this.valueArr[this.indexArr[key]];
//     };
    
//     remove (key) {
//         if(this.indexArr[key] !== undefined) {
//             this.valueArr[this.indexArr[key]] = undefined;
//             this.indexArr[key] = undefined;
//         }  
//     }
    
// };

class MyHashMap {
  constructor() {
   this.map = {};
    
  }
  
  put(key, value) {
    this.map[key] = value;
  }
    
  get(key) {
    if (!this.map[key]) return -1;
    return this.map[key];
  }
  
  remove(key) {
    delete this.map[key];
  }
}


/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */