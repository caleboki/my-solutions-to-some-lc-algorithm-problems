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

// class WordDictionary {
//     constructor() {
//         this.trie = {}
//     }
    
//     addWord(word) {
//         let cur = this.trie
//         for (let alpha of word) {
//             if (!cur[alpha]) cur[alpha] = {}
//             cur = cur[alpha]
//         }
//         cur.word = true
//     }
    
//     search(word) {
        
//         const dfs = (j, root) => {
//             let cur = root
//             for (let i = j; i < word.length; i++) {
//                 let c = word[i]
//                 if (c === '.') {
//                     //if character is '.' implies we could potentially go
//                     //thru 26 different paths
//                     for (let d of Object.values(cur)) {
//                         if (dfs(i+1, d)) return true
//                     }
//                     return false

//                 } else {
//                     if (!cur[c]) return false
//                     cur = cur[c]
//                 }

//             }
            
//             return cur.word
//         }
        
//         return dfs(0, this.trie)
        
//     }
// }

// function Node () {
//     // children object to store children nodes
//     this.children = {};
    
//     // boolean to check if the current node represents a letter that is the ending of a word
//     this.isWordEnding = false;
    
//     // note: you might also want to store this.char here for debugging purposes or for different problems.
// }

// var WordDictionary = function() {
//     // the root is a node itself.
//     this.root = new Node();
// };

// WordDictionary.prototype.addWord = function(word) {
//     // we will traverse the trie starting from the root node and add nodes for each letter in word.
//     let currentNode = this.root;
    
//     for (const char of word) {
//         // if a node exists for a given letter then don't do anything.
//         // if not create a new node for that letter.
//         currentNode.children[char] = currentNode.children[char] || new Node();
        
//         // move on to the next node.
//         currentNode = currentNode.children[char];
//     }
    
//     // after looping, the currentNode variable will point to the node representing the last letter of word.
//     // so we mark that node as a word ending.
//     currentNode.isWordEnding = true;
// };

// WordDictionary.prototype.search = function(word) {
//     // helper function to call recursively
//     const searchHelper = (currentNode, i) => {
        
//         // if we reach the i that's the length of word and currentNode is a word ending, word exists.
//         if (i === word.length) return currentNode.isWordEnding
        
//         const char = word[i]
        
//         // if char is a dot, that means we can match it with any letter.
//         // to do that programmatically, we go through all of the children of the current node. why?
//         // we don't know which, if any, of the children can use the dot to make the given string.
//         // so we go through all of them and check if any of them can return true.
//         if (char === '.') {
//             for (const char of Object.keys(currentNode.children)) {
//                 const child = currentNode.children[char];
//                 if (searchHelper(child, i + 1)) return true
//             }
            
//             // if no child can make use of the dot to come up with the given word,
//             // then even the alternative version (e.g 'pad') 
//             // of the given string (e.g 'pa.') doesn't exist in our dictionary.
//             return false
//         } 
        
//         // if char isn't a dot, it's more straightforward...
//         else {
//             // looking for a letter that should come after another and can't find it?
//             // that means the word doesn't exist in our dictionary so return false.
//             if (!(char in currentNode.children)) return false
            
//             // go on to the next node in our dictionary and the next letter in the word
//             return searchHelper(currentNode.children[char], i + 1)
//         }
//     }
    
//     // we call this function by starting at our root node with the index for the first letter in the string
//     return searchHelper(this.root, 0)
// };

class Node {
    constructor() {
        this.children = {}
        this.isWord = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new Node()
    }
    
    addWord(word) {
        let currentNode = this.root
        
        for (const char of word) {
            // if a node exists for a given letter then don't do anything.
            // if not create a new node for that letter.
            currentNode.children[char] = currentNode.children[char] || new Node()
            
            //on to the next node
            currentNode = currentNode.children[char]
            
            //after iteration currentNode would point to the node representing the last
            //letter of the word, so we mark as a word ending
            currentNode.isWord = true
        }
    }
    
    search(word) {
    // helper function to call recursively
    const searchHelper = (currentNode, i) => {

        // if we reach the i that's the length of word and currentNode is a word ending, word exists.
        if (i === word.length) return currentNode.isWord

        const char = word[i]

        // if char is a dot, that means we can match it with any letter.
        // to do that programmatically, we go through all of the children of the current node. why?
        // we don't know which, if any, of the children can use the dot to make the given string.
        // so we go through all of them and check if any of them can return true.
        if (char === '.') {
            for (const char of Object.keys(currentNode.children)) {
                const child = currentNode.children[char];
                if (searchHelper(child, i + 1)) return true
            }

            // if no child can make use of the dot to come up with the given word,
            // then even the alternative version (e.g 'pad')
            // of the given string (e.g 'pa.') doesn't exist in our dictionary.
            return false
        }

        // if char isn't a dot, it's more straightforward...
        else {
            // looking for a letter that should come after another and can't find it?
            // that means the word doesn't exist in our dictionary so return false.
            if (!(char in currentNode.children)) return false

            // go on to the next node in our dictionary and the next letter in the word
            return searchHelper(currentNode.children[char], i + 1)
        }
    }

    // we call this function by starting at our root node with the index for the first letter in the string
    return searchHelper(this.root, 0)
}
}



