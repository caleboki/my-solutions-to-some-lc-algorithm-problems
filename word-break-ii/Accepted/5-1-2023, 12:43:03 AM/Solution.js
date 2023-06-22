// https://leetcode.com/problems/word-break-ii

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */


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