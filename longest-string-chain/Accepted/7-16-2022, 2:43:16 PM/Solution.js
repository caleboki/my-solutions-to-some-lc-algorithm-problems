// https://leetcode.com/problems/longest-string-chain

/**
 * @param {string[]} words
 * @return {number}
 */
// var longestStrChain = function(words) {
//     let wordsPresent = new Set(words), memo = new Map(), res = 0
    
//     words.sort((a, b) => {return a.length - b.length})
    
//     for (let word of words) {
//         memo.set(word, 1)
        
//         for (let i = 0; i < word.length; i++) {
            
//         }
//     } 
// };

const longestStrChain = (words) => {
    words.sort((a, b) => {return a.length - b.length})
    
    let memo = {}, max = 0
    
    for (let word of words) {
        let longest = 0 //current longest chain
        
        for (let i = 0; i < word.length; i++) {
            //eliminate one character and keep the rest intact 
            let subWord = word.slice(0, i) + word.slice(i+1)
            
            //update current longest chain
            longest = Math.max(longest, (memo[subWord] || 0) + 1)
        }
        
        memo[word] = longest
        max= Math.max(max, longest)
    }
    return max
}