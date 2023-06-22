// https://leetcode.com/problems/palindrome-permutation

/**
 * @param {string} s
 * @return {boolean}
 */
// If a string with an even length is a palindrome, every character in the string must always occur an even number of times. If the string with an odd length is a palindrome, every character except one of the characters must always occur an even number of times. Thus, in case of a palindrome, the number of characters with odd number of occurrences can't exceed 1(1 in case of odd length and 0 in case of even length).

var canPermutePalindrome = function(s) {
    
    let map = {};
    let count = 0;
    //Frequency map
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
          map[s[i]] +=1;
        }
        else {
          map[s[i]] = 1;
        }
    }
    
    let freq = Object.values(map);
    freq.forEach(f => {
        if (f % 2 !== 0) count++; //characters with odd frequencies
    })
    
    if (count > 1) return false;
    
    return true;
    
    
};