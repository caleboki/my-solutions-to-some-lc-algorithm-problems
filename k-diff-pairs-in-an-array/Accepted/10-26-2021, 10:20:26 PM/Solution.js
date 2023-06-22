// https://leetcode.com/problems/k-diff-pairs-in-an-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(!nums || nums.length < 2) {return 0};
    
    let obj = {};
    let result = 0;
    
    nums.forEach(function(num){
        if (num in obj) {
            obj[num] +=1;
        }
        else {
            obj[num] = 1;
        }
        
    })
    
    Object.keys(obj).forEach(function(item){
        item = parseInt(item); //convert the string keys to integer
        
        if (k > 0 && (item + k) in obj) {
            result++;
        }
//check for obj[num] > 1 because for a pair to be formed we need two different numbers, not same
        else if (k == 0 && obj[item] > 1) {
            result++;
        }
        
    })
    
    return result;
    
    
};