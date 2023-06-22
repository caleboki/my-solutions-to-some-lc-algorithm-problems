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
    map.set(3, 'invalid')
    map.set(4, 'invalid')
    map.set(5, 'invalid')
    map.set(6, 'different')
    map.set(7, 'invalid')
    map.set(8, 'valid')
    map.set(9, 'different')
    
    num = num.split('')
    
    let isValid = (value) => map.get(parseInt(value)) === 'valid'
    
    for (i = 0; i < num.length; i++) {
        if (map.get(parseInt(num[i])) === 'invalid') return false
    }
    
    if (num.every(isValid)) return true
    
    
    return true
};

