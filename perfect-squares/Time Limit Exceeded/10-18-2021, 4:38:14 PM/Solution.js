// https://leetcode.com/problems/perfect-squares

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let squares = []
    
    for (let i = 1; i <= 10000; i++ ) {
        squares.push(i*i)
    }
    
    squares = squares.filter(s => s < n)
    
//     let i = 0, j = squares.length - 1
    
//     while (i < j && j-1 !== 1) {
//         let diff = n - squares[j]
//         if (squares.indexOf(diff) === -1) {
//             j--
//         }
//     }
    
    while(squares.length && squares.length !== 2) {
        let diff = n - squares[squares.length - 1]
        if (!squares.includes(diff)) squares.pop()
    }
    

    return (n/squares[squares.length - 1])
    
    //filter array to values less than or equal to n
    //subtract n from every value in the subarray
    //check if this difference is in the array or it is a factor of 1 or more elements in this array
    
    
};