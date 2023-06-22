// https://leetcode.com/problems/find-original-array-from-doubled-array

/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if (changed.length % 2 !== 0) return [] 
    
    let result = [], n = (changed.length/2)
    
    
    changed = changed.filter(f => changed.indexOf(f) >= 3)
    
    changed = changed.map(f => f/2)
    return changed
    
    
    
};