// https://leetcode.com/problems/minimum-increment-to-make-array-unique

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    
    if (A.length < 2) {return 0}; //if single element, no need to increment
    
    A.sort(function (a,b) {return a-b}); //sorting array
    
    let count = 0;  
    
    for (i = 1; i < A.length; i++) {
        if (A[i] <= A[i - 1]) {
            //the difference b/w the previous and current value + 1, is the min                               //increment
            count += A[i - 1] - A[i] + 1; 
            A[i] = A[i - 1] + 1; //making current value unique
        }
    }
    return count;
};
// Time Complexity: O(nlog(n))
// Space Complexity: O(1)