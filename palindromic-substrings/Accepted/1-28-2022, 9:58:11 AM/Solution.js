// https://leetcode.com/problems/palindromic-substrings

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    const countPalindromesAroundCenter = (ss, low, high) => {
        let ans = 0
        
        while (low >= 0 && high < ss.length) {
            if (ss[low] !== ss[high]) break
            low--
            high++
            
            ans++
            
        }
        
        return ans
        
    }
    
    
    let ans = 0

    for (let i = 0; i < s.length; i++) {
        ans += countPalindromesAroundCenter(s, i, i)
        ans += countPalindromesAroundCenter(s, i, i+1)

    }
    return ans
};