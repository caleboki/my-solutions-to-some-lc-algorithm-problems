// https://leetcode.com/problems/reaching-points

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
function reachingPoints(sx, sy, tx, ty) {
    
    while(tx >= sx && ty >= sy) {
        
        if ((sx == tx) && (sy == ty)) return true;
        
        if (ty > tx) {
            ty %= tx
        } else {
            tx %= ty
        };
        
        if (tx == sx) {
            if ((ty-sy) % tx == 0) {
                return true;
            }
            else {
                return false;
            }
            
        }
        
        if (ty == sy) {
            if ((tx-sx) % ty == 0) {
                return true;
            }
            else {
                return false;
            }
            
        }
                 
    }
    return false;
    
    

    
    
};