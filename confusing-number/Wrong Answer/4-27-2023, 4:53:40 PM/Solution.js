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
    map.set(2, false)
    map.set(3, false)
    map.set(4, false)
    map.set(5, false)
    map.set(6, 9)
    map.set(7, false)
    map.set(8, 8)
    map.set(9, 6)

    n = n.toString().split('')

    for (let i of n) {
       result.unshift(map.get(Number(i))) 
    }

    n = Number(n.join(''))

    if (Number(result.join('')) === n) return false
    
    console.log(typeof(Number(result.join(''))))
    return true
    
    
};