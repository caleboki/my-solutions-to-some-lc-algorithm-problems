// https://leetcode.com/problems/implement-trie-prefix-tree


// var Trie = function() {
    
// };

// /** 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
    
// };

// /** 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
    
// };

// /** 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
    
// };

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

//https://www.youtube.com/watch?v=giiaIofn31A
//for explanation
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
        let cur = this.trie;
        for(let alpha of word){
            if(!cur[alpha]) return false;
            if(cur[alpha].word == word) return true
            cur = cur[alpha];
        }        
        return false  
    }
    
    startsWith(prefix) {
        let cur = this.trie;
        for(let alpha of prefix){
            if(!cur[alpha] ) return false;
            cur = cur[alpha];
        }
        return true;
    }
}