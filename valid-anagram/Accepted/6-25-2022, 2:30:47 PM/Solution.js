// https://leetcode.com/problems/valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s === '' || t === '') return false
    
    if (s.split('').sort().join('') === t.split('').sort().join('')) return true
    
    return false
};