// https://leetcode.com/problems/strobogrammatic-number

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    if (num === "") return true
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
    
    num = num.split('')
    
    num = num.map(Number)
    
   for (let i = 0; i<num.length; i++) {
       result.unshift(map.get(num[i])) 
   }
    
   if (result.join('') === num.join('')) return true
    
   return false
};

