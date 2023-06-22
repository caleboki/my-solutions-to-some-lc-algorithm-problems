// https://leetcode.com/problems/perfect-squares

/**
 * @param {number} n
 * @return {number}
 */
// var numSquares = function(n) {
//     if (n === 1) return 1
    
//     let squares = []
    
//     for (let i = 1; i <= n; i++ ) {
//         squares.push(i*i)
//     }
    
//     let queue = new Set()
//     queue.add(n)
    
//     let level = 0
//     while(queue.length) {
//         level++
//         let nextQueue = new Set()
        
//         for (let remainder of queue) {
            
//         }
        
        
//     }
     
// };

//https://www.youtube.com/watch?v=HLZLwjzIVGo
var numSquares = function(n) {
    let dp = Array(n+1).fill(n);
    dp[0] = 0
    
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j*j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i -(j*j)] + 1)
        }
    }
    
    return dp[n]
    
};