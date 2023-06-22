// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  let map = {};
  let count = 0;
  
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
  
  freq.forEach(f => {
    const index = freq.indexOf(f);
    if (freq.splice(index, 1).includes(f)) {
      f--;
      count++;
    };
  })
  
  return count;
};