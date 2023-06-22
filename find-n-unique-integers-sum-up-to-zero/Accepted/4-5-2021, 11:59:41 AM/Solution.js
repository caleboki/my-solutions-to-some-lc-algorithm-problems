// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    let arr = [] //array for unique integers
    let neg=-1, pos=1 //setting negative and positive pairs
    while(n > 1){
        arr.push(neg--)
        arr.push(pos++)
        n-=2 //subtracting two because pair was pushed
    }
    if(n%2 === 1) arr.push(0) //edge case where n is odd
    return arr
    
};