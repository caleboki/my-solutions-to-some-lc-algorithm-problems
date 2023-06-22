// https://leetcode.com/problems/valid-palindrome-iii

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
    //console.log(longestSubstring(s))
    return k - longestSubstring(s) >= 0
};

function isPal(s, i, j) {  
    while(i < j){
        if(s[i] != s[j]) return false;
        i++;
        j--;
    }
    return true;
}

function longestSubstring(s) {
    for (let t = 0; t < s.length; t++) {
        let j = s.length - 1 - t;
        let i = 0;
        
        while(j < s.length) {
            if (isPal(s, i, j)) {
                console.log(s.substring(i, j+1))
                return s.substring(i, j+1).length
            }
            i++;
            j++
        }
    }
    return s.length; 
}