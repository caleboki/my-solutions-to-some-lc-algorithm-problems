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
        for (let i = 0; i < freq.length; i++) {
            freq.shift();
            if (freq.find(k => k === freq[i])){
              freq[i]--;
              count++;
            }
        }
    return count;
};