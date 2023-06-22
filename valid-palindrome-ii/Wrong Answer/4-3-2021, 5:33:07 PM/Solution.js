// https://leetcode.com/problems/valid-palindrome-ii

/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome (s) {
    
    let i = 0;
    let j = s.length - 1;
    
    while(i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            
            if (isPalindrome(s, i + 1, j)) return i;
            
            if (isPalindrome(s, i, j - 1)) return j;
            
            return false;
        }
    }
    return true;
    

};

function isPalindrome(str, i, j) {
  while( i < j ) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
  }
    return true;
}

