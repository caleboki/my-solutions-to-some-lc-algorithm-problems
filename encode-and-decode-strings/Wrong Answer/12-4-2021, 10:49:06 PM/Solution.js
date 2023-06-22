// https://leetcode.com/problems/encode-and-decode-strings

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    console.log(strs)
    return strs.toString()
    
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return s.split(',')
    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */