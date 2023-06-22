// https://leetcode.com/problems/counting-words-with-a-given-prefix

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
// var prefixCount = function(words, pref) {
//     let count = 0, n = pref.length
    
//     for (let word of words) {
//         if (word.substring(0, n) === pref) count++
//     }
    
//     return count
    
// };

class Trie {
    constructor() {
        this.trie = {}
    }
    
    insert(word) {
        
        let cur = this.trie
        for(let alpha of word){
            if(!(alpha in cur)) cur[alpha] = {}
            cur = cur[alpha]
        }
        cur.word = word
    }
    
    search(word) {
        let cur = this.trie
        for(let alpha of word){
            if(!(alpha in cur)) return false
            if(cur[alpha].word === word) return true
            cur = cur[alpha]
        }        
        return false  
    }
    
    startsWith(prefix) {
        let cur = this.trie
        for(let alpha of prefix){
            if(!(alpha in cur)) return false
            cur = cur[alpha]
            
        }
        
        return true
    }
}

var prefixCount = function(words, pref) {
    let trie = new Trie, count = 0
    
    for (let word of words) {
        trie.insert(word)
    }
    
    for (let key in trie.trie) {
        if (trie.startsWith(pref)) count++
    }
    
    
    return count
};