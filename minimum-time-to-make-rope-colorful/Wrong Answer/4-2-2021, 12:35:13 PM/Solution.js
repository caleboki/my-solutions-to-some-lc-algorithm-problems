// https://leetcode.com/problems/minimum-time-to-make-rope-colorful

/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    
    let c = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === s[i + 1]) {
            c += cost[i];
        }
        
    }
    return c;
    
};