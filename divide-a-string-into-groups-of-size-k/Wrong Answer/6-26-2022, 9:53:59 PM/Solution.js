// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let res = [], i = 0
    
    while (i < s.length) {
        res.push(s.substring(i, i+k))
        i += 3
    }
    
    let last = res[res.length - 1]
    
    last += fill.repeat(k-last.length)
    
    res.pop()
    res.push(last)
    
    
    

    
    return res
    
    
};