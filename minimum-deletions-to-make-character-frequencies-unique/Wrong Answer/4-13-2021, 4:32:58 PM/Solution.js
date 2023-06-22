// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  let count = 0;
  let seen = {};
  let map = {};
  
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      map[s[i]] +=1;
    }
    else {
      map[s[i]] = 1;
    }
  }
  
  let freq = Object.values(map);
  if (new Set(freq).size === freq.length) return 0; //meaning no deletion necessary s is good
  
  for (let i = 0; i < freq.length; i++) {
    while (seen.hasOwnProperty(freq[i]) && freq[i] !== 0) {
      freq[i]--;
      count++; 
    }
    //seen[freq[i]] = 90;
  }
  return count; 
};