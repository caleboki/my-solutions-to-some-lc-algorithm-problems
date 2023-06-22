// https://leetcode.com/problems/minimum-increment-to-make-array-unique

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    
    if (A.length < 2) {return 0};
    
    A.sort();
    
    
    let count = 0;
    
    
    for (i = 1; i < A.length; i++) {
        if (A[i] <= A[i - 1]) {
            A[i] = A[i - 1] + 1;
            count++;
        }
    }
   
    
    return count;
    
    
};