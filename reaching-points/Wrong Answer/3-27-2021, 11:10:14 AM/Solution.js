// https://leetcode.com/problems/reaching-points

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
function reachingPoints(sx, sy, tx, ty) {
    
    //if ((tx - sx == 0) && (ty - sy == 0)) return true;
    if ((sx > tx) || (sy > ty)) return false;
    if (sx == tx && (ty - sy) % sy == 0) return true;
    if (sy == ty && (tx - sx) % sx == 0) return true;
    return reachingPoints(sx, sy, tx % ty, ty % tx);

    
    //return reachingPoints(sx + sy, sy, tx, ty) || reachingPoints(sx, sx + sy, tx, ty);
    
    

    
    
};