// https://leetcode.com/problems/palindrome-permutation

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let letters = [];
    let rword = "";
    
    for (let i = 0; i < s.length; i++) {
        letters.push(s[i]);
    }
  
    for (let i = 0; i < s.length; i++) {
        rword += letters.pop();
    }
    
    if (s === rword) {
        return true;
    }
    else {
        return false;
    }
    
};