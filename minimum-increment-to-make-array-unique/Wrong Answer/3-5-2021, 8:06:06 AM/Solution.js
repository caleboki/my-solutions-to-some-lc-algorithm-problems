// https://leetcode.com/problems/minimum-increment-to-make-array-unique

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    
    if (A.length < 2) {return 0};
    
    let count = 0;
    let obj = {};
    
    A.forEach(function(i) {
        if (i in obj) {
            obj[i] += 1;
        }
        else {
            obj[i] = 1;
        }
    });
    
    Object.keys(obj).forEach(function(k) {
        k = parseInt(k);
        let moves = k - 1;
        count += moves;
    })
    
    return count;
    
    
};