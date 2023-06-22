// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  let map = {};
  let count = 0;
  let unique = [];
  
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      map[s[i]] +=1;
    }
    else {
      map[s[i]] = 1;
    }
  }
  
  let freq = Object.values(map);
  if (new Set(freq).size === freq.length) return 0;
  
  freq.sort(function(a, b) {
    return b - a
  })
  
  for (let i = 0; i < freq.length; i++) {
    if (unique.length === 0 || !unique.includes(freq[i])) {
      unique.push(freq[i]);
    }
    else {
      freq[i]--;
      unique.push(freq[i])
      count++;
    }
  }
  
 
  
  return count;
};