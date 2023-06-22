// https://leetcode.com/problems/factorial-trailing-zeroes

/**
 * @param {number} n
 * @return {number}
 */
// var trailingZeroes = function(n) {
//     let result
//     let zeroes = 0
    
//     const fact = (n) => {
//         if (n <= 1) return 1
//         return n * fact(n-1)
//     }
//     result = fact(n)
    
//     while (result % 10 === 0) {
//         zeroes++
//         result = result/10
        
//     }
//     return zeroes  
// };

var trailingZeroes = function(n) {
    let zeroes = 0
    
    for (let i = 5; i <= n; i+=5) {
        let powerOf5 = 5
        while(i % powerOf5 === 0){
            zeroes++
            powerOf5 *= 5
        }
    }
    return zeroes
}