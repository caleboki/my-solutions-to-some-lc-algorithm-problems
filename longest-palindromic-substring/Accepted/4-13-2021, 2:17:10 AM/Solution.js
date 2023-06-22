// https://leetcode.com/problems/longest-palindromic-substring

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    for (let j = s.length-1; j >= 0; j--) {
    let i = 0, k = j;
        while (k < s.length) {
            let substr = s.substring(i,k+1);
            if (isPalindrome(substr)) return substr;
            i++, k++; 
            // slide the window to the right 
            // while keeping the same length of the window
        }
    }
    return ""; // no palindromic substring exists
};

function isPalindrome(str) {
    let  l = 0, r = str.length-1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++, r--;
    }
    return true;
}