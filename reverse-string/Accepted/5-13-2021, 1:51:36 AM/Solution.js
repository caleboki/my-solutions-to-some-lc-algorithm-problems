// https://leetcode.com/problems/reverse-string

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l = 0
    let r = s.length
    
    for (let i = l; i < r; i++) {
        [s[i], s[r-1]] = [s[r-1], s[i]]
        r--
    }
    
};