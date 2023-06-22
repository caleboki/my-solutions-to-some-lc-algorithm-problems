// https://leetcode.com/problems/valid-palindrome-ii

/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome (s) {
    console.log(s)
    if (!canPermutePalindrome(s)) return false;
    
//     let map = {};
//     let oddCharacter = [];
//     //Frequency map
//     for (let i = 0; i < s.length; i++) {
//         if (map[s[i]] !== undefined) {
//           map[s[i]] +=1;
//         }
//         else {
//           map[s[i]] = 1;
//         }
//     }
    
//     let oddFreq = Object.values(map).find(f => f % 2 > 0);
//     let itemKey = Object.keys(map).find(f => map[f] === oddFreq);
//     let strIndex = s.indexOf(itemKey);
    
//     //console.log(oddFreq)
//     //console.log(itemKey)
    
    
//     s = s.replace(s[strIndex], "");
//     if (validPalindrome(s)) return true;
//     return false;
    
    
    
    
    
    
};

function canPermutePalindrome(s) {
    let map = {};
    let count = 0;
    //Frequency map
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
          map[s[i]] +=1;
        }
        else {
          map[s[i]] = 1;
        }
    }
    
    let freq = Object.values(map);
    freq.forEach(f => {
        if (f % 2 !== 0) count++; //characters with odd frequencies
    })
    
    
    if (s.length % 2 === 0) {
       if (count > 0) return false;    
    }
     
    if (s.length % 2 !== 0) {
       if (count > 1) return false;
        
    }
    
    return true; 
}