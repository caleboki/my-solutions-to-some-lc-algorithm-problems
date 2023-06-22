// https://leetcode.com/problems/strobogrammatic-number

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    if (num === "") return true
    let map = new Map()
    
    map.set(0, 'valid')
    map.set(1, 'valid')
    map.set(2, 'invalid')
    map.set(3, 'valid')
    map.set(4, 'invalid')
    map.set(5, 'invalid')
    map.set(6, 'different')
    map.set(7, 'invalid')
    map.set(8, 'valid')
    map.set(9, 'different')
    
    for (i = 0; i < num.length; i++) {
        if (map.get(parseInt(num[i])) === 'invalid') return false
    }
    return true
};