// https://leetcode.com/problems/greatest-common-divisor-of-strings

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1.startsWith(str2)) {
        
        if (str1.includes(str1.substring(str2.length, str1.length))) return str1.substring(str2.length, str1.length)
    }
    return ''
    
};