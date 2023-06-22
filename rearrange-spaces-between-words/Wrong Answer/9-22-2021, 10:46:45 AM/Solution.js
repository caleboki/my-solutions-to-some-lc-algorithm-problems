// https://leetcode.com/problems/rearrange-spaces-between-words

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  
    let spaces = text.split("").filter(s => s === ' ')
    let words = text.split(" ").filter(s => s !== '')
    
    let evenly = Math.floor(spaces.length/(words.length - 1))
    let extra = spaces.length - (evenly * (words.length - 1))
    let newString = words[0]
    
    for (let i = 1; i < words.length; i++) {
        newString += ' '.repeat(evenly) + words[i]
    }
    
    newString += ' '.repeat(extra)
    
    
    return (newString)
//     console.log(evenly)
//     console.log(words)
 
   
};