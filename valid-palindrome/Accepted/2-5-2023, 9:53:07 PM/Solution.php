// https://leetcode.com/problems/valid-palindrome

class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s) {
        $clean = strtolower(preg_replace("/[^0-9a-z]/i", "", $s));

        $l = 0;
        $r = strlen($clean)-1;
        
        while ($l <= $r) {
            if ($clean[$l] !== $clean[$r]) {
                return false;
            }
            $l++;
            $r--;

        }
        return true;
        
        
    }
}

// var isPalindrome = function(s) {
//     let clean = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
//     let l = 0, r = clean.length - 1
    
//     while (l <= r) {
//         if (clean[l] !== clean[r]) {
//             return false
//         }
//         l++, r--
//     }
    
//     return true
// };