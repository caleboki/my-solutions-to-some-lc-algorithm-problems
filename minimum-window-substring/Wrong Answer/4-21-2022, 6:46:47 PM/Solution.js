// https://leetcode.com/problems/minimum-window-substring

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    let windowStart = 0, matched = 0, substrStart = 0, minLength = s.length , charFrequency = {};

  for (let i = 0; i < t.length; i++) {
    const chr = t[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] >= 0) { // Count every matching of a character
        matched += 1;
      }
    }

    // Shrink the window if we can, finish as soon as we remove a matched character
    while (matched === t.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        substrStart = windowStart;
      }

      const leftChar = s[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        // Note that we could have redundant matching characters, therefore we'll decrement the
        // matched count only when a useful occurrence of a matched character is going out of the window
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }

  if (minLength > s.length) {
    return '';
  }
  return s.substring(substrStart, substrStart + minLength);
};