// https://leetcode.com/problems/valid-palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     let clean = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
//     let letters = [];
//     let rword = "";
  
//     for (let i = 0; i < clean.length; i++) {
//         letters.push(clean[i]);
//      }
  
//     for (let i = 0; i < clean.length; i++) {
//         rword += letters.pop();
//     }
  
//     if (clean === rword) return true;
    
//     return false;
    
    
    
// };


// var isPalindrome = function(s) {
//     let clean = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
//     let l = 0, r = clean.length - 1
    
//     while (l <= r) {
//         if (clean[l] === clean[r]) {
//             l++, r--
//         } else {
//             return false
//         }
//     }
    
//     return true
// };

var isPalindrome = function(s) {
    let clean = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    const isPal = (clean) => {
        if (clean.length === 0 || clean.length === 1) return true
    
        if (clean[0] === clean[clean.length - 1]) return isPal(clean.substring(1, clean.length - 1))
    
        return false
    }
    
    return isPal(clean)
    
    
    
    
};