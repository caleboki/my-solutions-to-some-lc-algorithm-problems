// https://leetcode.com/problems/longest-palindromic-substring

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//     for (let j = s.length-1; j >= 0; j--) {
//         let i = 0, k = j;
            
//             while (k < s.length) {
//                 let substr = s.substring(i,k+1);
                
//                 if (isPalindrome(substr)) return substr;
//                 i++, k++; 
//                 // slide the window to the right 
//                 // while keeping the same length of the window
//             }
            
//         }
//     return ""; // no palindromic substring exists
// };

// function isPalindrome(str) {
//     let  l = 0, r = str.length-1;
//     while (l < r) {
//         if (str[l] !== str[r]) return false;
//         l++, r--; 
//     }
//     return true;
// }

// var longestPalindrome = function(s) {
    
//     let ans = "";
   
//     const traverse = (start, end)=>{
//         while(start >=0 && end < s.length && s[start] === s[end]){
//             if(ans.length < end - start + 1){
//                 ans = s.substring(start, end+1);
//             }
//             start--;
//             end++;
//         }
//     }
    
//     for(let i=0;i<s.length;i++){
//         traverse(i,i);
//         traverse(i, i+1);
//     }
//     return ans.length > 0 ? ans : s[0]
    
// };

var longestPalindrome = function(s) {
    function isPal(i, j)
    {
        while(i < j){
            if(s[i] != s[j])
                return false;
            i++;
            j--;
        }
        return true;
    }
    let n = s.length;
    for(let k = 0; k < s.length; k++)
    {
        let j = s.length - 1 - k;
        let i = 0;
        while(j < s.length)
        {
            //console.log(s.substring(i, j+1))
            if(isPal(i,j)){
                return s.substring(i, j + 1);
            }
            i++;
            j++;
        }
    }
    return s;
    
};




