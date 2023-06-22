// https://leetcode.com/problems/design-in-memory-file-system


// var FileSystem = function() {
    
// };

// /** 
//  * @param {string} path
//  * @return {string[]}
//  */
// FileSystem.prototype.ls = function(path) {
    
// };

// /** 
//  * @param {string} path
//  * @return {void}
//  */
// FileSystem.prototype.mkdir = function(path) {
    
// };

// /** 
//  * @param {string} filePath 
//  * @param {string} content
//  * @return {void}
//  */
// FileSystem.prototype.addContentToFile = function(filePath, content) {
    
// };

// /** 
//  * @param {string} filePath
//  * @return {string}
//  */
// FileSystem.prototype.readContentFromFile = function(filePath) {
    
// };

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */

// class FileNode {
//     constructor (isFile) {
//         this.isFile = isFile
//         this.fileContent = ''
//         this.children = {}
//     }
    
//     isFile
//     fileContent
//     children
// }

// class FileSystem {
//     constructor() {
//         this.root = new FileNode(false)
//     }
    
//     root
    
//     ls (path) {
//         let subdirs = path.split('/')
//         let fileNode = this.root
        
//         for (let i = 1; i < subdirs.length; i++) {
//             fileNode = fileNode.children[subdirs[i]]
//         }
        
//         let fileAndDirs = []
//         if (fileNode.isFile) {
//             fileAndDirs.push(path)
//             return fileAndDirs
//         }
        
//         for (let child in fileNode.children) {
//             fileAndDirs.push(path + '/' + child)
//         }
        
//         return fileAndDirs
//     }
    
//     mkdir(path) {
//         let subdirs = path.split('/')
//         let fileNode = this.root
        
//         for (let i = 1; i < subdirs.length; i++) {
            
//             if (subdirs[i] in fileNode.children) {
//                 fileNode = fileNode.children[subdirs[i]]
//                 continue
//             }
            
//             let newNode = new FileNode(false)
//             fileNode.children[subdirs[i]] = newNode
//             fileNode = newNode
//         }
        
//     }
    
//     addContentToFile(filePath, content) {
//         let subdirs = filePath.split('/')
        
//         let fileNode = this.root
        
//         for (let i = 1; i < subdirs.length; i++) {
//             let subdir = subdirs[i]
            
//             if (subdir in fileNode.children) {
//                 fileNode = fileNode.children[subdir]
//                 continue
//             }
            
//             let newNode = new FileNode(i === subdir.length - 1)
//             fileNode.children[subdir] = newNode
//             fileNode = newNode
            
//         }
        
//     }
    
//     readContentFromFile(filePath) {
//         let subdirs = filePath.split('/')
//         let node = this.root
        
//         for (let i = 1; i < subdirs.length; i++) {
//             let subdir = subdirs[i]
//             node = node.children[subdir]
//         }
        
//         return node.fileContent
//     }
// }


class TrieNode {
    constructor() {
        this.content = null
        this.children = new Map()
        
    }
}

class FileSystem {
    constructor() {
        this.root = new TrieNode()
    }
    
    
    ls (path) {   
        let currentNode = this.root
        
        if (path !== ('/')) {
            path = path.split('/')
            let currentString
            
            for (let i = 1; i < path.length; i++) {
                currentString = path[i]
                currentNode = currentNode.children.get(currentString)
                //Check if it is file path
                
                if (i === path.length - 1 && currentNode.content !== null) {
                    return [currentString]
                }
            }
        }
        
        
        let children = Array.from(currentNode.children.keys())
        //children.sort((a, b) => {return a-b})
        children.sort(function(a, b){return a-b})
        
        return children
    }
    
    mkdir(path) {
        let currentNode = this.root
        
        path = path.split('/')
        let currentString
        
        for (let i = 1; i < path.length; i++) {
            currentString = path[i]
            
            if (!currentNode.children.has(currentString)) {
                currentNode.children.set(currentString, new TrieNode())
            }
            currentNode = currentNode.children.get(currentString)
        }
    }
    
    addContentToFile(filePath, content) {
        let currentNode = this.root
        let path = filePath.split('/'), currentString
        
        for (let i = 1; i < path.length; i++) {
            currentString = path[i]
            
            if (!currentNode.children.has(currentString)) {
                currentNode.children.set(currentString, new TrieNode())
            }
            currentNode = currentNode.children.get(currentString)
        }
        
        if (currentNode.content !== null) {
            currentNode.content += content
        } else {
            currentNode.content = content
        }
    }
    
    readContentFromFile(filePath) {
        let currentNode = this.root
        let path = filePath.split('/'), currentString
        
        for (let i = 1; i < path.length; i++) {
            currentString = path[i]
            
            if (!currentNode.children.has(currentString)) {
                currentNode.children.set(currentString, new TrieNode())
            }
            currentNode = currentNode.children.get(currentString)
        }
        console.log(currentNode)
        return currentNode.content
    }
}