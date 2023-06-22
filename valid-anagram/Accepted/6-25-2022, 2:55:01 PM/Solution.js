// https://leetcode.com/problems/valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     if (s === '' || t === '') return false
    
//     if (s.split('').sort().join('') === t.split('').sort().join('')) return true
    
//     return false
// };

const isAnagram = (s, t) => {
    if (s === '' || t === '') return false
    if (s.length !== t.length) return false
    
    let map = new Map()
    
    for (let a of s) {
        if (!(map.has(a))) map.set(a, 0)
        map.set(a, map.get(a) + 1)
    }
    
    for (let a of t) {
        if (!map.has(a)) return false
        if (map.get(a) > 0) map.set(a, map.get(a) - 1)
        if (map.get(a) === 0) map.delete(a)
    }
    
    return true
}