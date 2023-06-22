// https://leetcode.com/problems/palindrome-permutation

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    
    let map = {};
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
        if (f % 2 === 0) return true;
    })
    
    return false;
    
    
};