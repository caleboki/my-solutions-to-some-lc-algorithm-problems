// https://leetcode.com/problems/find-the-difference

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = {}
    
    for (let i of s) {
        if (!(i in map)) map[i] = 0
        map[i]++
    }
    
    for (let i of t) {
        if (i in map) {
            if (map[i] > 0) map[i]--
        }
        else {
            return i
        }   
    }
    
    let key = Object.keys(map).filter(f => map[f] > 0)
    return key[0]
    
};