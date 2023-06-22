// https://leetcode.com/problems/confusing-number

/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    if (n === "") return true
    let map = new Map()
    let result = []
    
    map.set(0, 0)
    map.set(1, 1)
    map.set(6, 9)
    map.set(8, 8)
    map.set(9, 6)

    n = n.toString().split('')

    for (let i of n) {
        if (!map.has(Number(i))) return false
        result.unshift(map.get(Number(i)))
    }
    n = Number(n.join(''))
    
    return Number(result.join('')) !== n
};