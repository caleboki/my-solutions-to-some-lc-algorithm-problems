// https://leetcode.com/problems/minimum-time-to-make-rope-colorful

/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    let c = 0;
   
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i - 1]) {  
            c += Math.min(cost[i], cost[i-1]);
            //Setting current pointer to max because min should be deleted
            cost[i] = Math.max(cost[i], cost[i-1]); 
        } 
    }
    return c;  
};