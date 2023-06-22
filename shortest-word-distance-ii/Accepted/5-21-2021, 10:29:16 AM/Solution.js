// https://leetcode.com/problems/shortest-word-distance-ii

/**
 * @param {string[]} wordsDict
 */
// var WordDistance = function(wordsDict) {
    
// };

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
// WordDistance.prototype.shortest = function(word1, word2) {
    
// };

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */

class WordDistance {
    constructor(wordsDict) {
        this.wordsDict = wordsDict
    }

    shortest(word1, word2) {
        this.word1p = undefined //so that this is reset everytime
        this.word2p = undefined //so that this is reset everytime
        this.result = []
        
        for (let i = 0; i < this.wordsDict.length; i++) {
            if (this.wordsDict[i] === word1) this.word1p = i
            if (this.wordsDict[i] === word2) this.word2p = i

            if ((this.word1p !== undefined) && (this.word2p !== undefined)) {
                this.result.push(Math.abs(this.word1p - this.word2p))
            }
        }
        
        let minDist = Math.min(...this.result)
        return minDist
    }
}