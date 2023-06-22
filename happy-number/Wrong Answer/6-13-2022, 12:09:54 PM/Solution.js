// https://leetcode.com/problems/happy-number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) return true
    
    let visited = new Set(), nString = n.toString(), i = 0, j = nString.length-1, sum = 0
    
    while (!visited.has(sum) && i < j) {
        if (visited.has(sum)) return true
        
        while (i < j) {
            
            sum += (nString[i] ** 2) + (nString[j] ** 2)
            if (sum === 1) return true
            visited.add(sum)
            nString = sum.toString(),
            i++, j--
        }
    
        sum = 0, i = 0, j = nString.length - 1
    }
    return false
};