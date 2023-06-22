// https://leetcode.com/problems/reaching-points

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
function reachingPoints(sx, sy, tx, ty, memo = []) {
    
    
    
    if (memo[0] == tx && memo[1] == ty) return true;
    
    if (memo[1] !== ty) {
        memo[1] = sx + sy;
    }
    
    if (memo[0] !== tx) {
        memo[0] = sx + sy;
    }
    return false;
    
    
};