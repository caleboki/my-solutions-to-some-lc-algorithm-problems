// https://leetcode.com/problems/minimum-increment-to-make-array-unique

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    
    if (A.length < 2) {return 0}; //if single element, no need to increment
    
    A.sort(function (a,b) {return a-b});
    
    let count = 0;  
    
    for (i = 1; i < A.length; i++) {
        
            count += A[i - 1] - A[i] + 1;
            A[i] = A[i - 1] + 1;
        
    }
    return count;
};