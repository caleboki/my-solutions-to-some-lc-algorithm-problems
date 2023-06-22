// https://leetcode.com/problems/word-break-ii

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
// var wordBreak = function(s, wordDict, memo = new Map(), result = []) {
//     if (memo.has(s)) {
//         result.push(memo.get(s) + ' ')
//         return result
//     }
//     if (s === '') return result

//     for (let word of wordDict) {
        
//         if (s.indexOf(word) === 0) {
//             const suffix = s.slice(word.length)
//             memo.set(suffix, wordBreak(suffix, wordDict, memo, result))

//             if (wordBreak(suffix, wordDict, memo, result).length > 0) return result
//         }
//     }
//     return []
// };

const wordBreak = (s, wordDict, memo = new Map()) => {
    if (memo.has(s)) return memo.get(s)
    if (s === '') return ['']

    const sentences = []

    for (let word of wordDict) {
        if (s.indexOf(word) === 0) {
            const suffix = s.slice(word.length);
            const subSentences = wordBreak(suffix, wordDict, memo)
            for (const subSentence of subSentences) {
                sentences.push(subSentence ? `${word} ${subSentence}` : word);
            }
        }
    }
    memo.set(s, sentences)
    return sentences
}