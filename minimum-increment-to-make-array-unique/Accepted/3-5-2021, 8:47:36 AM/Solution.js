// https://leetcode.com/problems/minimum-increment-to-make-array-unique

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    
    if (A.length < 2) {return 0};
    
    A.sort((a,b)=>a-b);
    console.log(A)
    
    
    let count = 0;
    
    
    for (i = 1; i < A.length; i++) {
        if (A[i] <= A[i - 1]) {
            count += A[i - 1] + 1 - A[i];
            A[i] = A[i - 1] + 1;
            
        }
    }
   
    
    return count;
    
    
};