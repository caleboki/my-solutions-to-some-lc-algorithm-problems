// https://leetcode.com/problems/snapshot-array

/**
 * @param {number} length
 */
// var SnapshotArray = function(length) {
    
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// SnapshotArray.prototype.set = function(index, val) {
    
// };

// /**
//  * @return {number}
//  */
// SnapshotArray.prototype.snap = function() {
    
// };

// /** 
//  * @param {number} index 
//  * @param {number} snap_id
//  * @return {number}
//  */
// SnapshotArray.prototype.get = function(index, snap_id) {
    
// };

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

class SnapshotArray {
    constructor(length) {
        this.data = []
        this.map = {}
        this.snaps = 0
    }
    
    set(index, val) {
        this.data[index] = val
    }
    
    snap() {
        this.snaps++
        let snap_id = this.snaps - 1
        
        this.map[snap_id] = [...this.data]
        return snap_id
    }
    
    get(index, snap_id) {
        return this.map[snap_id][index] || null
    }
}