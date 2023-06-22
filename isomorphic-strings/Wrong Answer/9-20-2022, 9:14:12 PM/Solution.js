// https://leetcode.com/problems/isomorphic-strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = {}, mapT = {}
    
    for (let i of s) {
        if (!(i in mapS)) mapS[i] = 0
        mapS[i]++
    }
    
    for (let i of t) {
        if (!(i in mapT)) mapT[i] = 0
        mapT[i]++
    }
    
    let strS = Object.values(mapS).join(''), strT = Object.values(mapT).join('')
    
    if (strS === strT) return true
    return false
    
};