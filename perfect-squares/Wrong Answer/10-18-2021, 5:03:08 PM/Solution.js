// https://leetcode.com/problems/perfect-squares

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if (n === 1) return 1
    
    let squares = []
    
    for (let i = 1; i <= 10000; i++ ) {
        squares.push(i*i)
    }
    
    squares = squares.filter(s => s <= n)
    squares.reverse()
    
    let sum = 0
    
    for (let i = 0; i < squares.length; i++) {
        sum += squares[i]
        if (sum === n) return i+1
    }
    console.log(squares)
 
    
    
    //filter array to values less than or equal to n
    //subtract n from every value in the subarray
    //check if this difference is in the array or it is a factor of 1 or more elements in this array
    
    
};