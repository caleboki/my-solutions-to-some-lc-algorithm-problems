// https://leetcode.com/problems/encode-and-decode-strings

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    if (strs.length === 1) return strs[0]
    return strs.toString()
    
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    if (s.length === 1) return [s]
    return s.split(',')
    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */