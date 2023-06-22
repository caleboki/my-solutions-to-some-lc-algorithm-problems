// https://leetcode.com/problems/longest-palindromic-substring

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
   let res = "";
    let resLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        //dealing with odd length of string
        let l = i;
        let r = i;
        
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            //Get length of the current Palindrome and compare with resLen
            if ((r - l + 1) > resLen) {
                res = s.substring(l, r+1);
                resLen = r - l + 1;
                l--;
                r++;  
            }
        }
        
        //dealing with even length of string
        l = i;
        r = i + 1;
        
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            //Get length of the current Palindrome and compare with resLen
            if ((r - l + 1) > resLen) {
                res = s.substring(l, r+1);
                resLen = r - l + 1;
                l--;
                r++;   
            }
            
        }
        
    }
    return res;
    
   
};


