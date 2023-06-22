// https://leetcode.com/problems/design-add-and-search-words-data-structure


// var WordDictionary = function() {
    
// };

// /** 
//  * @param {string} word
//  * @return {void}
//  */
// WordDictionary.prototype.addWord = function(word) {
    
// };

// /** 
//  * @param {string} word
//  * @return {boolean}
//  */
// WordDictionary.prototype.search = function(word) {
    
// };

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class WordDictionary {
    constructor() {
        this.trie = {}
    }
    
    addWord(word) {
        let cur = this.trie
        for (let alpha of word) {
            if (!cur[alpha]) cur[alpha] = {}
            cur = cur[alpha]
        }
        cur.word = true
    }
    
    search(word) {
        
        const dfs = (j, root) => {
            let cur = root
            for (let i in word) {
                let c = word[i]
                if (c === '.') {
                    //if character is '.' implies we could potentially go
                    //thru 26 different paths
                    for (let d of Object.values(cur)) {
                        if (dfs(i+1, d)) return true
                    }
                    return false

                } else {
                    if (!cur[c]) return false
                    cur = cur[c]
                }

            }
            
            return cur.word
        }
        
        return dfs(0, this.trie)
        
    }
}