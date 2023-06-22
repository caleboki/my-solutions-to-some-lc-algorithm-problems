// https://leetcode.com/problems/reaching-points

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
function reachingPoints(sx, sy, tx, ty) {
    
    // if ((sx > tx) || (sy > ty)) return false;
    // if (sx == tx && (ty - sy) % sx == 0) return true;
    // if (sy == ty && (tx - sx) % sy == 0) return true;
    // return reachingPoints(sx, sy, tx % ty, ty % tx);
    
    while(tx >= sx && ty >= sy) {
        
        if ((sx == tx) && (sy == ty)) return true;
        
        if (ty > tx) {
            ty-=tx
        } else {
            tx-=ty
        };
           
        
        
    }
    return false;
    
    

    
    
};