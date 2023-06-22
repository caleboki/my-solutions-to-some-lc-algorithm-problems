// https://leetcode.com/problems/count-primes

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0
    
    let numbers = []
    let count = 0
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!numbers[i]) {
            for (let j = i*i; j < n; j+=i) {
                numbers[j] = true
            }
        }
    }
    
   
    
    for (let i = 2; i < n; i++) {
        
        if (!numbers[i]) count++
    }
    
    return count
    
};