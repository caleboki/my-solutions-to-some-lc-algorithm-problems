// https://leetcode.com/problems/design-log-storage-system

class LogSystem {
    constructor () {
        this.storage = [];
    }
    
    put(id, timestamp) {
        
        this.storage.push([id, timestamp]);
        //console.log(this.storage)
    }
    
    retrieve(start, end, granularity) {
        
        //Numbers in filter indicate where to cut off the start the startTime and endTime   string, because string has the format: Year:Month:Day:Hour:Minute:Second, for example, 2017:01:01:23:59:59
        
        let filter = {'Year': 4, 'Month': 7, 'Day': 10, 'Hour':13, 'Minute':16, 'Second':19}; 
        let n = filter[granularity];
        
        let startTime = start.substring(0, n); //substring of time to specified filter
        let endTime = end.substring(0, n); //substring of time to specified filter
        
        return this.storage.reduce((acc, [id, timestamp]) => {
            let currTime = timestamp.substring(0, n);
        
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