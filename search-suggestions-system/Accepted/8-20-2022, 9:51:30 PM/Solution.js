// https://leetcode.com/problems/search-suggestions-system

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
// var suggestedProducts = function(products, searchWord) {
//     if (products.length === 0 || searchWord.length === 0) return []
    
//     let result = []
    
//     searchWord = searchWord.toLowerCase()
//     products = products.map(function(v) {
//         return v.toLowerCase()
//     })
    
//     for (let i = 0; i < searchWord.length; i++) {
//         let matches = []
//         for (let j = 0; j < products.length; j++) {
//             let strP = products[j].substring(0, i+2).toLowerCase()
//             let strS = searchWord.substring(0, i+2).toLowerCase()
            
//             if (strP === strS) matches.push(products[j])
//         }
//         matches.sort()
//         if (matches.length > 3) matches.length = 3
//         result.push(matches)
//     }
//     return result
// };

// const suggestedProducts = (products, searchWord) => {
//     //products.sort()
    
//     let trie = new Trie(), result = []
//     const dfs = () => {}
    
//     const findTopThree = (root, searchTerm) => {
//         let result = []
        
//         let node = root
        
//         for (let i = 0; i < searchTerm.length; i++) {
//             if (!(searchTerm[i] in node)) return result
//             node = node[searchTerm[i]]
//         }
        
//         if (node.word) result.push(searchTerm)
        
//         for (let child of node[searchTerm[i]]) {
//             if (!child) {
//                 let thisResult = dfs(child, searchTerm, [])
//             }
//         }
        
//         return result
        
//     }
    
//     products.forEach(product => trie.insert(product))
    
//     for (let i = 1; i <= searchWord.length; i++) {
//         result.push(findTopThree(searchWord.substring(0, i)))
//     }
    
//     return result
    
    
// }

// class Trie {
//     constructor() {
//         this.trie = {}
//     }
    
//     insert(word) {
        
//         let cur = this.trie
//         for(let alpha of word){
//             if(!(alpha in cur)) cur[alpha] = {}
//             cur = cur[alpha]
//         }
//         cur.word = word
//     }
    
//     search(word) {
//         let cur = this.trie
//         for(let alpha of word){
//             if(!(alpha in cur)) return false
//             if(cur[alpha].word === word) return true
//             cur = cur[alpha]
//         }        
//         return false  
//     }
    
//     startsWith(prefix) {
//         let cur = this.trie
//         for(let alpha of prefix){
//             if(!(alpha in cur)) return false
//             cur = cur[alpha]
//         }
//         return true
//     }
    
// }

const suggestedProducts = (products, searchWord) => {
    products.sort()
    
    let result = []
    
    for (let i = 1; i < searchWord.length + 1; i++) {
        let searchTerm = searchWord.substring(0, i)
        
        let matches = []
        
        for (let product of products) {
            if (product.startsWith(searchTerm)) matches.push(product)
            if (matches.length === 3) break
        }
        
        result.push(matches)
    }
    return result
    
}

