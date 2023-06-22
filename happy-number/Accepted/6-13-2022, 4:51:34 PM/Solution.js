// https://leetcode.com/problems/happy-number

/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//     if (n === 1) return true
    
//     let visited = new Set(), nString = n.toString(), i = 0, j = nString.length-1, sum = 0
    
//     if (nString.length === 1) {
        
//         while (!visited.has(sum) && nString.length === 1) {
//             sum += nString[0] ** 2
//             if (sum === 1) return true
//             visited.add(sum)
//             nString = sum.toString()
//             sum = 0
//         }
//     }
    
//     while (i < j) {
//         if (visited.has(sum)) return true
        
//         while (i < j) {
            
//             sum += (nString[i] ** 2) + (nString[j] ** 2)
//             if (sum === 1) return true
//             visited.add(sum)
//             nString = sum.toString()
//             i++, j--
//         }
    
//         sum = 0, i = 0, j = nString.length - 1
//     }
//     return false
// };

const isHappy = (n) => {
    
    const getNext = (n) => {
        let sum = 0
    
        while (n > 0) {
            let d = n % 10
            n = Math.floor(n / 10)
            sum += (d * d)
        }
        return sum
    }
    
    let seen = new Set()
    while (n !== 1 && !seen.has(n)) {
        seen.add(n)
        n = getNext(n)
    }
    
    return n === 1
    
}