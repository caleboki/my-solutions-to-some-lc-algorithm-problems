// https://leetcode.com/problems/arranging-coins

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    let fullStairs = 0;
    
    for (let i = 1; i < n; i++) {
        if ((n - i) == 1 || (n - i) >= i) {
            fullStairs += 1;
        };
        
    }
    return fullStairs;
    
};