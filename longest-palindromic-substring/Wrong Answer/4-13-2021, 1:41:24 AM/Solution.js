// https://leetcode.com/problems/longest-palindromic-substring

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    if (s === "") return s;
    if (s.length === 1) return s;
    if ((s.length === 2) && (s[0] !== s[1])) return s[0];
    if (isPalindrome(s)) return s;
    
    if (s.length === 3) {
        let i = 1;
        let j = i + 1;
        while (j < 3) {
            let sub = s.substring(i, j+1);
            if (isPalindrome(sub)) return sub;
            j++;
        }
    }
    
    if (s.length % 2 > 0) {
        let mid = Math.floor(s.length/2);
        let i = mid - 1 
        let j = mid + 1;
        
        while (i >= 0 && j <= s.length) {
            let sub = s.substring(i, j+1);
            if (isPalindrome(sub)) return sub;
            i--;
            j++
        }      
    }
    
    if (s.length % 2 === 0) {
        let i = 1;
        let j = s.length - 1;   
        
        while (i < j) {
           let sub = s.substring(i, j); 
            if (isPalindrome(sub)) return sub;
            i++;
            j--;
        }
    }
    
    
};

function isPalindrome(s) {
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
    } else {
        return false;
    }
}