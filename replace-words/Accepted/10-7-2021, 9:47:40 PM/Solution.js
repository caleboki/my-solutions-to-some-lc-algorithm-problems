// https://leetcode.com/problems/replace-words

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const dict = new Set(dictionary);
    const words = sentence.split(' ');
  
      for(let i= 0; i < words.length; i++){
        for(let j = 1; j < words[i].length; j++){
          if(dict.has(words[i].substring(0, j)))
            words[i] = words[i].substring(0, j);
        }
      }
  
  return words.join(' ')
   
    
};