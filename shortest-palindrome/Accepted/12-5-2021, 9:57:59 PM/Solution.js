// https://leetcode.com/problems/shortest-palindrome

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const reverseString = s.split('').reverse().join('');
    
    for (let i = 0; i < s.length; i++) {
      
        if (s.substring(0, s.length - i) === reverseString.substring(i)) {
            //return `${reverseString.substring(0, i)}${s}`
            return reverseString.substring(0, i) + s
        }
    }
    
    return '';
};