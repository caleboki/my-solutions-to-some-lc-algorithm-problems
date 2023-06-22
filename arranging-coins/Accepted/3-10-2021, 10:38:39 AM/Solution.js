// https://leetcode.com/problems/arranging-coins

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    //return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
    return Math.floor((Math.sqrt(2*n + 0.25)) - 0.5);
    
};