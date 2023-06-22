// https://leetcode.com/problems/word-ladder

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

const ladderLength = (beginWord, endWord, wordList) => {
    wordList = new Set(wordList)
    if(!wordList.has(endWord)) return 0
    wordList.add(beginWord)

    let visited = new Set(), queue = [beginWord], result = 1
    visited.add(beginWord)

    //Building the graph of words
    let graph = {}
    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            let pattern = word.slice(0, i) + '*' + word.slice(i+1)
            graph[pattern] = graph[pattern] || []
            graph[pattern].push(word)
        }
    }
    
    while(queue.length) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let word = queue.shift()
            if (word === endWord) return result

            for (let j = 0; j < word.length; j++) {
                let pattern = word.slice(0, j) + '*' + word.slice(j+1);
                for (let neigbourWord of graph[pattern]) {
                    if (!visited.has(neigbourWord)) {
                        visited.add(neigbourWord)
                        queue.push(neigbourWord)
                    }
                    
                }
            }
        }
        result += 1
    }
    return 0
}