// https://leetcode.com/problems/verifying-an-alien-dictionary

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
// var isAlienSorted = function(words, order) {
//     let map = {}
//     let result = []
    
//     for (let i = 0; i < order.length; i++) {
//         map[order[i].charCodeAt(0) - 97] = i
//     }
    
//     for (let i = 1; i < words.length; i++) {
//         if (compare(map, words[i - 1], words[i]) > 0) return false
//     }
//     console.log(map)
//     return true
// };

// function compare(map, word1, word2) {
//     let i = 0, j = 0, compareValue = 0
    
//     while(i < word1.length && j < word2.length && compareValue === 0) {
//         compareValue = map[word1.charCodeAt(0) - 97] - map[word2.charCodeAt(0) - 97]
//         i++, j++
//     }
    
//     if (compareValue === 0) {
//         return (word1.length - word2.length)
//     } else {
//         return compareValue
//     }
// }

var isAlienSorted = function(words, order) {
    const dict = new Map();
    for(let i = 0; i < order.length; ++i) {
        dict.set(order[i], i);
    }
    
    for (let i = 1; i < words.length; i++) {
        const word1 = words[i - 1]
        const word2 = words[i]
        
        // compare the adjacent words, cases to consider:
		// case 1: w1 and w2 have same letters e.g w1 = apple and w2 = app
		// case 2: both are lexicographically sorted e.g w1 = hello and w2 = leetcode
		// case 3: both are not lexicographically sorted e.g w1 = leetcode and w2 = hello
        
        let k;
        for (k = 0; k < word1.length && k < word2.length; k++){
            // case 2 - break and check the next adjacent words
            if(dict.get(word1[k]) < dict.get(word2[k])) {
                break;
            } else if(dict.get(word1[k]) > dict.get(word2[k])) {// case 3 - return false
                return false;
            }
        }
        
        // case 1 - if w1 is longer then return false
        if(k === word2.length && k < word1.length) {
            return false
        }
    }
    
    // this is reached when all the words are checked to their adjacent word and 
	// means that all the words are lexicographically sorted
    return true;
}