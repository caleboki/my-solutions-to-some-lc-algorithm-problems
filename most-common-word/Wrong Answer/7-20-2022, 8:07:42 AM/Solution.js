// https://leetcode.com/problems/most-common-word

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase()
    paragraph = paragraph.replace(/[^a-zA-Z0-9 ]/g, '')
    paragraph = paragraph.split(' ' || ',')
    console.log(paragraph)
    
    
    let bannedSet = new Set(), paragraphMap = new Map()
    for (let b of banned) bannedSet.add(b)
    
    for (let p of paragraph) {
        if (!paragraphMap.has(p)) paragraphMap.set(p, 0)
        paragraphMap.set(p, paragraphMap.get(p) + 1)
    }
    
    let paragraphPair = []
    
    for (let [key, value] of paragraphMap) {
        paragraphPair.push([key, value])
    }
    paragraphPair.sort((a, b) => {return b[1] - a[1]})
    
    for (let i = 0; i < paragraphPair.length; i++) {
        if (bannedSet.has(paragraphPair[i][0])) continue
        return paragraphPair[i][0] 
    }
    
};