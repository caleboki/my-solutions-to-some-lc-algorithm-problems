// https://leetcode.com/problems/happy-number

/**
 * @param {number} n
 * @return {boolean}
 */

// const isHappy = (n) => { 
//     const getNext = (n) => {
//         let sum = 0
    
//         while (n > 0) {
//             let d = n % 10
//             n = Math.floor(n / 10)
//             sum += (d * d)
//         }
//         return sum
//     }
    
//     let seen = new Set()
//     while (n !== 1 && !seen.has(n)) {
//         seen.add(n)
//         n = getNext(n)
//     }
    
//     return n === 1
// }

const isHappy = (n) => {
    let seen = new Set()
    
    while (n !== 1) {
        let current = n, sum = 0
        
        while (current !== 0) {
            sum += (current % 10) ** 2
            current = Math.floor(current/10)
        }
        
        if (seen.has(sum)) return false
        seen.add(sum)
        
        n = sum
    }
    
    return true
}