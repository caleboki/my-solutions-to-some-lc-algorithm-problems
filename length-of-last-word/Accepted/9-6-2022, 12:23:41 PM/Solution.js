// https://leetcode.com/problems/length-of-last-word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(' ')
    s = s.filter(f => f.length > 0)
    
    return s[s.length - 1].length
};