// https://leetcode.com/problems/reverse-vowels-of-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set(['a','e','i','o','u'])
    const arr = s.split('')
    let left = 0, right = s.length-1
    while(left < right){
      const lc = arr[left].toLowerCase()     
      const rc = arr[right].toLowerCase()
      if(vowels.has(lc) && vowels.has(rc)){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;        
        continue
      }
      if(!vowels.has(lc)){
        left++
      }else if(!vowels.has(rc)){
        right--
      }
    }
  return arr.join('')
};