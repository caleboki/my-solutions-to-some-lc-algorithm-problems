// https://leetcode.com/problems/valid-palindrome-iii

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
// var isValidPalindrome = function(s, k) {
    
//     return k - longestSubstring(s) >= 0
// };

// function isPal(s, i, j) {  
//     while(i < j){
//         if(s[i] != s[j]) return false;
//         i++;
//         j--;
//     }
//     return true;
// }

// function longestSubstring(s) {
//     for (let t = 0; t < s.length; t++) {
//         let j = s.length - 1 - t;
//         let i = 0;
        
//         while(j < s.length) {
//             if (isPal(s, i, j)) {
//                 //console.log(s.substring(i, j+1))
//                 return s.substring(i, j+1).length
//             }
//             i++;
//             j++
//         }
//     }
//     return s.length; 
// }

var isValidPalindrome = function(s, k) {
    const len = s.length;
    const memo = [...Array(len)].map(() => Array(len).fill(0));
    
    const isPal = (s, i, j) => {
        // Base case, only 1 letter remaining
        if (i === j) return 0
        
        //Base case 2, only 2 letters remaining
        if (i === j - 1) return s[i] !== s[j] ? 1 : 0 //i.e at most one character needs to be deleted
        
        if (memo[i][j] !== undefined) return memo[i][j]
        
        // Case 1: Character at `i` equals character at `j`
        
        if (s[i] === s[j]) return memo[i][j] = isPal(s, i + 1, j - 1)
        
        // Case 2: Character at `i` does not equal character at `j`.
        // Either delete character at `i` or delete character at `j`
        // and try to match the two pointers using recursion.
        // We need to take the minimum of the two results and add 1
        // representing the cost of deletion.
        
        return memo[i][j] = 1 + Math.min(isPal(s, i + 1, j), isPal(s, i, j - 1))
    }
    //console.log(isPal(s, 0, s.length - 1))
    return isPal(s, 0, s.length - 1) <= k
}

