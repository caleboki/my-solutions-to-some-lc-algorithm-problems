// https://leetcode.com/problems/ugly-number

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n === 1) return true
    let set = new Set()
    set.add(2)
    set.add(3)
    set.add(5)
    
    let count = 3, i = 2
    const isPrime = (n) => {}
    
    while (i < n + 1) {
        if (i === 7 && count === 3) return false
        
        if (n % i === 0 && set.has(i)) {
            n = n / i
            count--
        } 
       
        i++
        
    }
    return true
    
};