// https://leetcode.com/problems/find-all-anagrams-in-a-string

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function(s, p) {
//     let resultIndices = [], j = 0, map = new Map(), matched = 0
    
//     for (let i = 0; i < p.length; i++) {
//         if (!map.has(p[i])) {
//             map.set(p[i], 0)
//         }
//         map.set(p[i], map.get(p[i]) + 1) 
//     }
    
//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             map.set(s[i], map.get(s[i]) - 1)
            
//             if (map[s[i]] === 0) matched++
//         }
        
//         if (matched === Object.keys(map).length) resultIndices.push(j)
        
//         if (i >= p.length - 1) {
//             let left = s[j]
//             j++
//             if(map.get(s[left]) === 0) matched--
//             map.set(s[left], map.get(s[left]) + 1)  
//         }
//     }
    
//     return resultIndices  
// };


var findAnagrams = function(s, p) {
    let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (let i = 0; i < p.length; i++) {
    const chr = p[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  const resultIndices = [];
  // our goal is to match all the characters from the 'charFrequency' with the current window
  // try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    if (rightChar in charFrequency) {
      // decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) { // have we found an anagram?
      resultIndices.push(windowStart);
    }

    // shrink the sliding window
    if (windowEnd >= p.length - 1) {
      let leftChar = s[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1; // before putting the character back, decrement the matched count
        }
        charFrequency[leftChar] += 1; // put the character back
      }
    }
  }

  return resultIndices;
};