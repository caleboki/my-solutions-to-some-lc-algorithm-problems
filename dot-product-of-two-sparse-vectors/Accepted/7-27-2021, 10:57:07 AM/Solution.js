// https://leetcode.com/problems/dot-product-of-two-sparse-vectors

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
// var SparseVector = function(nums) {
    
// };

// // Return the dotProduct of two sparse vectors
// /**
//  * @param {SparseVector} vec
//  * @return {number}
//  */
// SparseVector.prototype.dotProduct = function(vec) {
    
// };

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);

class SparseVector {
    constructor(nums) {
        this.nums = nums
        this.map = {}
    }
    
    dotProduct(vec){
        
        let result = 0
        
        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] !== 0 && vec.nums[i] !== 0) this.map[i] = [this.nums[i], vec.nums[i]]
        }
        
        let values = Object.values(this.map)
        values.forEach(v => {
            result += v[0] * v[1]
        })
        
//         let keys = Object.keys(this.map).map(Number)
        
//         keys.forEach(k => {
//             result += this.nums[k] * vec.nums[k]
//         })
        
        return result
        
    }
}