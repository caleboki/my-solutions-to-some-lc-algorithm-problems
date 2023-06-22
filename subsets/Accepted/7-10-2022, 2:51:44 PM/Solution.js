// https://leetcode.com/problems/subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output = [[]]
    
    for (let num of nums) {
        let length = output.length
        
        for (let i = 0; i < length; i++) {
            output.push([...output[i], num])
        }
    }
    return output
    
};