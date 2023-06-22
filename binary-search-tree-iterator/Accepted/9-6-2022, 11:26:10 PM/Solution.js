// https://leetcode.com/problems/binary-search-tree-iterator

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
// var BSTIterator = function(root) {
    
// };

// /**
//  * @return {number}
//  */
// BSTIterator.prototype.next = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function() {
    
// };

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

class BSTIterator {
    constructor(root) {
        this.root = root, this.list = [], this.pointer = 0, this.dfs(root)
    }
    
    next() {
        return this.list[this.pointer++]
    }
    
    hasNext() {
        return this.pointer < this.list.length
    }
    
    //inOrder traversal
    dfs(node) {
        if (!node) return
        
        this.dfs(node.left)
        this.list.push(node.val)
        this.dfs(node.right)
    }
}

// class BSTIterator {
//     constructor(root) {
//         this.stack = [], this.leftMostInorder(root)
//     }
    
//     next() {
//         let topMostNode = this.stack.pop()
//         if (topMostNode.right) this.leftMostInorder(topMostNode.right)
//         return topMostNode.val
//     }
    
//     hasNext() {
//         return this.stack.length > 0
//     }
    
//     //partial traversal
//     leftMostInorder(node) {
//         while(node) {
//             this.stack.push(node)
//             node = node.left
//         }
//     }
// }