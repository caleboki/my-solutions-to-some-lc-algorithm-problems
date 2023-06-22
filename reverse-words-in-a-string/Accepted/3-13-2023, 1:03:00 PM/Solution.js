// https://leetcode.com/problems/reverse-words-in-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (s.length === 0) return ''

    s = s.split(' ').filter(x => x.length > 0).reverse()

    return s.join(' ')
    
    
};