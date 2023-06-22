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
//     this.dict = {}
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
//     if(!this.dict[key]) return -1
    
//     this.dict[key].count++;
    
//     this.freq.delete(key); //? need to investigate
//     this.freq.set(key, ++this.counter) //? need to investigate
    
//     return this.dict[key].val;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LFUCache.prototype.put = function(key, value) {
//     if (this.capacity === 1) this.dict = {}
    
//     if (this.dict[key]) {
        
//         this.dict[key].count++;
//         this.dict[key].val = value;
        
//         this.freq.delete(key); //? need to investigate
//     } else {
        
//         this.dict[key] = {
//             count:1,
//             val:value
//         }
//     }
//     this.freq.set(key, ++this.counter); //? need to investigate
    
//     if(Object.keys(this.dict).length>this.capacity){
        
//         //? need to investigate
//         let arr = Object.keys(this.dict).sort((a,b)=>{
//             if(this.dict[a].count===this.dict[b].count){
//                 return this.freq.get(parseInt(a)) - this.freq.get(parseInt(b));
//             }
//             return this.dict[a].count-this.dict[b].count;
//         });
        
//         let deleteVal = arr[0];
//         if(deleteVal==key && this.capacity !==1){
//             deleteVal = arr[1];
//         }
//         delete this.dict[deleteVal];
        
//     }
    
// };

// class LFUCache {
//     constructor(capacity) {
//         this.capacity = capacity
//         this.cache = new Map()
//         this.useCounter = new Map()
//     }
    
//     get(key) {
//         if (this.capacity === 0) return -1
//         if (!this.cache.has(key)) return -1
        
//         this.useCounter.set(key, this.useCounter.get(key) + 1)
        
//         let access = this.cache.get(key)
//         this.cache.delete(key)
//         this.cache.set(key, access)

//         return access
//     }
    
//     put(key, value) {
        
//         this.useCounter.set(key, (this.useCounter.get(key) + 1) || 1)
        
//         if (this.cache.size === this.capacity) {
//             let useCounter = Array.from(this.useCounter)
//             useCounter = useCounter.sort((a, b) => a[1]-b[1])
            
//             if (useCounter[0][1] === useCounter[1][1]) {
//                 this.cache.delete(this.cache.keys().next().value)
//             } else {
//                 this.cache.delete(useCounter[0][0]) 
//             }
//         } 
        
//         if (this.cache.has(key)) {
            
//             this.cache.delete(key)
//             this.cache.set(key, value)
//         } else {
//             this.cache.set(key, value)
//         } 
//     }
// }

class Node {
	constructor(key, value, count) {
		this.key = key;
		this.value = value;
		this.next = null;
		this.prev = null;
		this.count = count || 1;
	}
}

class DLL {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(key, value, count) { // adds count
		const node = new Node(key, value, count);

		if (!this.head) this.head = this.tail = node;
		else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}

		this.length++;
		return node;
	}

	shift() {
		if (!this.head) return;

		const head = this.head;

		if (this.length === 1) this.head = this.tail = null;
		else {
			this.head = head.next;
			this.head.prev = null;
			head.next = null;
		}

		this.length--;
		return head;
	}

	remove(node) {
		// handle last node
		if (!node.prev && !node.next) this.head = this.tail = null;
		// handle head
		else if (!node.prev) {
			this.head = node.next;
			this.head.prev = null;
		}

		// handle tail
		else if (!node.next) {
			this.tail = node.prev;
			this.tail.next = null;
		}

		// handle in between
		else {
			const prev = node.prev;
			const next = node.next;

			prev.next = next;
			next.prev = prev;
		}

		this.length--;
	}
}

class LFUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.size = 0;
		this.map = {}; // key: Node
		this.counts = {}; // count: DLL
		this.LFU = 1;
	}

	increment(node) {
		const { count, key, value } = node;
		const newCount = count + 1;

		// delete and add again with updated count
		this.counts[count].remove(node); // delete from DLL

		// handle empty DLL
		if (!this.counts[count].length) {
			delete this.counts[count]; // remove DLL

			// last LFU in current count removed
			// update LFU to new LFU count
			if (this.LFU === count) this.LFU = newCount;
		}

		if (!this.counts[newCount]) this.counts[newCount] = new DLL(); // DLL DNE, create

		const LL = this.counts[newCount];
		const newNode = LL.push(key, value, newCount); // create node with updated count and add to DLL

		this.map[key] = newNode; // add node to map w/ updated count
	}

	get(key) {
		const node = this.map[key];

		if (!node) return -1;

		this.increment(node);
		return node.value;
	}

	evict() {
		const DLL = this.counts[this.LFU]; // get LFU DLL
		const LFU = DLL.shift(); // delete from DLL

		delete this.map[LFU.key]; // delete from counts

		if (!DLL.length) delete this.counts[this.LFU]; // delete empty DLL
	}

	put(key, value) {
		const node = this.map[key];

		if (this.capacity === 0) return; // empty capacity
		if (!node && this.size >= this.capacity) this.evict(); // handle evict

		if (!node) {
			if (!this.counts[1]) this.counts[1] = new DLL(); // if DLL DNE, create

			const LL = this.counts[1];

			this.map[key] = LL.push(key, value); // delete and add to map/counts/DLL

			this.LFU = 1; // update LFU to lowest
			this.size++; // increment count of nodes
		} else {
			node.value = value;
			this.increment(node);
		}
	}
}