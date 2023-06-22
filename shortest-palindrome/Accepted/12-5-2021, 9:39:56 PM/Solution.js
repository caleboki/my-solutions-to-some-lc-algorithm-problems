// https://leetcode.com/problems/shortest-palindrome

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const reverseString = s.split('').reverse().join('');
    const length = s.length;
    
    for (let i = 0; i < length; i++) {
      
        if (s.substring(0, length - i) === reverseString.substring(i)) {
            
            return `${reverseString.slice(0, i)}${s}`;
        }
    }
    
    return '';
    
};