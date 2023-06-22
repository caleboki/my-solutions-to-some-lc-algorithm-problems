// https://leetcode.com/problems/reaching-points

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
function reachingPoints(sx, sy, tx, ty, memo = []) {
    
    if ((memo[sx] == sx) && (memo[sy] == sy) ) return true;
    
    memo[sx] = sx + sy;
    memo[sy] = sx + sy;
    
    return false;

};