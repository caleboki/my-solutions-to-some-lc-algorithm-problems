// https://leetcode.com/problems/arranging-coins

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let fullStairs = 0;
    
    for (let i = 1; i < n; i++) {
        if ((n - i) > i ) {
            fullStairs += 1;
        };
        
    }
    return fullStairs;
    
};