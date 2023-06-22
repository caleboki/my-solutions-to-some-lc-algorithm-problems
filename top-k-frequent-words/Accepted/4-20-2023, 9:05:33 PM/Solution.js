// https://leetcode.com/problems/top-k-frequent-words

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// var topKFrequent = function(words, k) {
//     words.sort()
//     let wordsMap = {}
    
//     for (let word of words) {
//         if (!(word in wordsMap)) wordsMap[word] = 0
//         wordsMap[word]++
//     }
    
//     let wordsPair = []
    
//     for (let word in wordsMap) wordsPair.push([word, wordsMap[word]])
//     wordsPair.sort((a, b) => {return b[1] - a[1]})
//     wordsPair.length = k
    
//     wordsPair = wordsPair.map(w => w[0])
//     return wordsPair
// };


const topKFrequent = (words, k) => {
    words.sort()
    
    let wordMap = new Map(), wordPair = []
    
    for (let word of words) {
        if (!wordMap.has(word)) wordMap.set(word, 0)
        wordMap.set(word, wordMap.get(word) + 1)
    }
    
    for ([key, value] of wordMap) wordPair.push([key, value])
    
    wordPair.sort((a, b) => {return b[1] - a[1]})
    wordPair.length = k
    
    return wordPair.map(w => w[0])
}