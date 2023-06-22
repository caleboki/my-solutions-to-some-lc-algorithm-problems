// https://leetcode.com/problems/roman-to-integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = new Map(), sum = 0, i = 0
    
    map.set('M', 1000)
    map.set('D', 500)
    map.set('C', 100)
    map.set('L', 50)
    map.set('X', 10)
    map.set('M', 5)
    map.set('I', 1)
    
    while (i < s.length) {
        let currentSymbol = s.substring(i, i+1)
        let currentValue = map.get(currentSymbol)
        let nextValue = 0
        
        if (i + 1 < s.length) {
            let nextSymbol = s.substring(i+1, i+2)
            nextValue = map.get(nextSymbol)
        } 
        
        if (currentValue < nextValue) {
            sum += (nextValue - currentValue)
            i+=2
        }
        else {
            sum += currentValue
            i+=1
        }
        
        
    }
    return sum
    
};