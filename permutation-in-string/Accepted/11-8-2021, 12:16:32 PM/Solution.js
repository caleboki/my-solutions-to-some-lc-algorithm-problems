// https://leetcode.com/problems/permutation-in-string

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


//Further investigation needed!
// var checkInclusion = function(s1, s2) {
//     let m = new Map(); // map of frequency of chars in s1
//     for(let a of s1) { m.set(a, m.get(a)+1 || 1); } 
    
//     let l = 0, r = 0, n = m.size; // n is number of uniq words in s1
    
//     while(r<s2.length) { // increase r until the map is empty (n==0)
//         let a = s2[r]; 
//         if(m.has(a)) m.set(a, m.get(a)-1);  // if we found a char from s1 in s2, decrease freq
//         if(m.get(a)==0) n--; // if we found all freq of that char, n-- 
        
//         while(n==0) { // if we foud all freq of all characters of s1 in s2, 
//             let b = s2[l];
//             if (r-l+1 == s1.length) return true; // if curr window matches s1 length then we found the answer
//             if(m.has(b)) m.set(b, m.get(b)+1); // when moving window, add prev chars back
//             if(m.get(b)>0) n++; // we did not find all the chars in required window
//             l++; // keep  moving the window.
//         }
//         r++;
//     }
//     return false;
// };


var checkInclusion = function(s1, s2) {
    let j = 0, matched = 0, map = {}
    
    for (let i = 0; i < s1.length; i++) {
        if (!(s1[i] in map)) map[s1[i]] = 0
        map[s1[i]]++  
    }
    
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] in map) {
            map[s2[i]]--
            
            if (map[s2[i]] === 0) matched++
        }
        
        if (matched === Object.keys(map).length) return true
        
        if (i >= s1.length - 1) {
            let left = s2[j]
            j++
            
            if (left in map) {
                if (map[left] === 0) matched--
                map[left]++
            }
        }   
    }
    
    return false;
};