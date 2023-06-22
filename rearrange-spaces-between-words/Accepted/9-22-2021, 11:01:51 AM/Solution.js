// https://leetcode.com/problems/rearrange-spaces-between-words

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  
    let spaces = text.split("").filter(s => s === ' ')
    let words = text.split(" ").filter(s => s)
    
    let evenly = ~~(spaces.length/(words.length - 1))
    let extra = spaces.length - (evenly * (words.length - 1)) || 0
    
    
    return words.join(' '.repeat(evenly)) + ' '.repeat(extra);

   
};
