// https://leetcode.com/problems/design-log-storage-system

class LogSystem {
    constructor () {
        this.storage = [];
    }
    
    put(id, timestamp) {
        
        this.storage.push([id, timestamp]);
        console.log(this.storage)
    }
    
    retrieve(start, end, granularity) {
        
        let filter = {'Year': 4, 'Month': 7, 'Day': 10, 'Hour':13, 'Minute':16, 'Second':19};
        const n = filter[granularity];
        const res = [];
        
        const startTime = start.substring(0, n);
        const endTime = end.substring(0, n);
        
        return this.storage.reduce((acc, [id, timestamp]) => {
            const currTime = timestamp.substring(0, n);
        
            if (currTime >= startTime && currTime <= endTime) acc.push(id);
            return acc;
        },[]);
        
    }
     
}

// var LogSystem = function() {
    
// };

// /** 
//  * @param {number} id 
//  * @param {string} timestamp
//  * @return {void}
//  */
// LogSystem.prototype.put = function(id, timestamp) {
    
// };

// /** 
//  * @param {string} start 
//  * @param {string} end 
//  * @param {string} granularity
//  * @return {number[]}
//  */
// LogSystem.prototype.retrieve = function(start, end, granularity) {
    
// };

/** 
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(start,end,granularity)
 */