// https://leetcode.com/problems/replace-words

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// var replaceWords = function(dictionary, sentence) {
//     const dict = new Set(dictionary);
//     const words = sentence.split(' ');
  
//       for(let i= 0; i < words.length; i++){
//         for(let j = 1; j < words[i].length; j++){
//           if(dict.has(words[i].substring(0, j)))
//             words[i] = words[i].substring(0, j);
//         }
//       }
  
//   return words.join(' ')
// };

// var replaceWords = function(dictionary, sentence) {
//     let trie = {}
    
//     const insert = (word) => {
//         let current = trie
//         for (let alpha of word) {
//             if (!current[alpha]) current[alpha] = {}
//             current = current[alpha]
//         }
//         current.word = word  
//     }
    
//     const replace = (word) => {
//         let current = trie
//         for (let alpha of word) {
//             if (!current[alpha]) return word
//             current = current[alpha]
//             if (current.word) return current.word
//         }
//         return current.word
//     }
    
//     for (let word of dictionary) {
//         insert(word)
//     }
    
//     sentence = sentence.split(' ')
    
//     for (let i = 0; i < sentence.length; i++) {
//         sentence[i] = replace(sentence[i])
//     }
    
//     return sentence.join(' ')
// };

var replaceWords = function(dictionary, sentence) {
    dictionary = new Set(dictionary)
    
    sentence = sentence.split(' ')
    
    const replace = (word) => {
        for (let i = 0; i < word.length; i++) {
            if (dictionary.has(word.substring(0, i+1))) return word.substring(0, i+1)
        }
        return false
    }
    
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = replace(sentence[i]) || sentence[i]
    }
    return sentence.join(' ')
}

