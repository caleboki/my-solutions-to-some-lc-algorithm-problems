// https://leetcode.com/problems/valid-palindrome-ii

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    
    let i = 0, j = s.length - 1
    
    const isPalindrome = (str, i, j) => {
        while(i < j) {
            if (str[i] !== s[j]) return false
            i++, j--
        }
        return true
    }
    
    while(i < j) {
        if (s[i] === s[j]) {
            i++, j--
        } else {
            
            if (isPalindrome(s, (i + 1), j)) return true
            
            if (isPalindrome(s, i, (j - 1))) return true
            
            return false
        }
    }
    return true    
};

