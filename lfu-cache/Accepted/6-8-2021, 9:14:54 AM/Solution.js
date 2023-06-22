// https://leetcode.com/problems/lfu-cache

// var LFUCache = function(capacity) {
//     this.capacity = capacity;
//     this.cache = new Map();
//     this.useCounter = {};
//     this.keyTrack = [];
// };

// LFUCache.prototype.get = function(key) {
//   if (!this.cache.has(key)) {
//       console.log(['blank'])
//       return -1
//   }
    
//   if (this.useCounter[key] !== undefined) {
//     this.useCounter[key]++
//   } else {
//     this.useCounter[key] = 1
//   }
  
//   this.keyTrack.splice(this.keyTrack.indexOf(key), 1)
//   //delete this.useCounter[key]
    
//   this.keyTrack.unshift(key)
    
//   console.log(this.useCounter)
    
//   return this.cache.get(key)
   
// };



// LFUCache.prototype.put = function(key, value) {
  
//   if (this.useCounter[key] !== undefined) {
//     this.useCounter[key]++
//   } else {
//     this.useCounter[key] = 1
//   }
  
//   //add item to start of array
//   if (!this.keyTrack.includes(key)){
//     this.keyTrack.unshift(key)
//   } else {
//     this.keyTrack.splice(this.keyTrack.indexOf(key), 1)
//     this.keyTrack.unshift(key)
//   }
  
  
//   if (this.cache.size >= this.capacity) {
    
//     let least = Math.min(...Object.values(this.useCounter))
//     let leastKeys = Object.keys(this.useCounter).filter(f => this.useCounter[f] === least)
//     leastKeys = leastKeys.map((i) => Number(i))
    
//     if (leastKeys.length === 1) {
//       this.cache.delete(leastKeys[0])
//       delete this.useCounter[leastKeys[0]]
//       this.cache.set(key, value);
//     } else {
//         for (let i = this.keyTrack.length - 1; i >= 0; i--) {
//           if (leastKeys.includes(this.keyTrack[i])) {
//             this.cache.delete(this.keyTrack[i])
//             this.keyTrack.splice(this.keyTrack.indexOf(this.keyTrack[i]), 1)
//             delete this.useCounter[this.keyTrack[i]]
            
//             break
//           }
//         }
        
//         this.cache.set(key, value);
//     }
    
    
//   } else {
//       this.cache.set(key, value);
    
//   }
//   console.log(this.useCounter)
    
// };



/**
 * @param {number} capacity
 */
// var LFUCache = function(capacity) {
//     this.capacity = capacity
//     this.freq = new Map();
//     this.counter=1;
    
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LFUCache.prototype.get = function(key) {
//     if (this.capacity === 0) return -1
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LFUCache.prototype.put = function(key, value) {
// };

var LFUCache = function(capacity) {
    this.dict = {};
    this.n = capacity;
    this.freq = new Map();
    this.counter=1;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(this.n===0){
        return -1;
    }
    if(!this.dict[key]){
        return -1;
    }
    this.dict[key].count+=1;
    this.freq.delete(key);
    this.freq.set(key,++this.counter)
    return this.dict[key].val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.n===1){
        //delete this.dict;
        this.dict={};
    }
    if(this.dict[key]){
        this.dict[key].count+=1;
        this.dict[key].val = value;
        this.freq.delete(key);
    }else{
        this.dict[key] = {
            count:1,
            val:value
        }
    }
    this.freq.set(key,++this.counter)
    if(Object.keys(this.dict).length>this.n){
        let arr = Object.keys(this.dict).sort((a,b)=>{
            if(this.dict[a].count===this.dict[b].count){
                return this.freq.get(parseInt(a)) - this.freq.get(parseInt(b));
            }
            return this.dict[a].count-this.dict[b].count;
        });
        let deleteVal = arr[0];
        if(deleteVal==key && this.n!==1){
            deleteVal = arr[1];
        }
        delete this.dict[deleteVal];
    }
};