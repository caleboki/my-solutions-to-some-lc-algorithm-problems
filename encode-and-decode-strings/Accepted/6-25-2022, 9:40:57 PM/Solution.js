// https://leetcode.com/problems/encode-and-decode-strings

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

//https://www.youtube.com/watch?v=B1k_sxOSgv8
var encode = function(strs) {
    let result = ''
    
    for (let s of strs) {
        result += s.length + '#' + s
    }
 
    return result
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let i = 0, result = []
    
    while (i < s.length) {
        let j = i
        while(s[j] !== '#') j++
        
        let length = +s.substring(i, j) //this portion is the integer
        result.push(s.substring(j+1, j+1+length))
        i = j + 1 + length
    }
    return result
    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */