// https://leetcode.com/problems/word-ladder

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// var ladderLength = function(beginWord, endWord, wordList) {
//     wordList = new Set(wordList), alpha = []
//     if(!wordList.has(endWord)) return 0
//     let queue = [beginWord], currentLevel = 1
//     while(queue.length) {
//         let length = queue.length
//         for (let i = 0; i < length; i++) {
//             let currentWord = queue.shift()
//             let temp = Array.from(currentWord)
//             for (let j = 0; j < currentWord.length; j++) {
//                 let originalChar = currentWord[j]
//                 for (let k = 'A'.charCodeAt(0); k <= 'Z'.charCodeAt(0); k++) {
//                     let letter = String.fromCharCode(k)
//                     if (currentWord[j] === letter)  continue
//                     let temp = Array.from(currentWord)
//                     temp[j] = letter
//                     let newWord = temp.join('')
//                     if (newWord === endWord) return currentLevel + 1
//                     if (wordList.has(newWord)) {
//                         queue.push(newWord)
//                         wordList.delete(newWord)
//                     }
//                 }
//                 temp[j] = originalChar
//                 currentWord = temp.join('')
//             }
//         }
//         currentLevel++
//     }
//     return 0 
// };
const ladderLength = (beginWord, endWord, wordList) => {
    wordList = new Set(wordList)
    if(!wordList.has(endWord)) return 0
    wordList.add(beginWord)

    let visited = new Set(), queue = [beginWord], result = 1
    visited.add(beginWord)

    let nei = {}
    for (const word of wordList) {
        for (let j = 0; j < word.length; j++) {
            let pattern = word.slice(0, j) + '*' + word.slice(j+1)
            nei[pattern] = nei[pattern] || []
            nei[pattern].push(word)
        }
    }
    console.log(nei)
    while(queue.length) {
        let length = queue.length
        for (let k = 0; k < length; k++) {
            let word = queue.shift()
            if (word === endWord) return result

            for (let l = 0; l < word.length; l++) {
                let pattern = word.slice(0, l) + '*' + word.slice(l+1);
                for (neiWord of nei[pattern]) {
                    if (!visited.has(neiWord)) {
                        visited.add(neiWord)
                        queue.push(neiWord)
                    }
                    
                }
            }

        }
        result += 1
    }
    return 0
}