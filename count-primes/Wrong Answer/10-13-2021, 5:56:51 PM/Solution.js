// https://leetcode.com/problems/count-primes

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0
    
    const isPrime = (num) => {
        for (let i = 2; i < num; i++) {
            if ((num % i) === 0) return true
        }
        return false
    }
    
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) count++
    }
    
    return count
    
};