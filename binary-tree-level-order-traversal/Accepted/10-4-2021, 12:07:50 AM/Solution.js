// https://leetcode.com/problems/binary-tree-level-order-traversal

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
 * @return {number[][]}
 */

// var levelOrder = function(root) {
//     if (!root) return []
    
//     let level = 1
//     let res = []
    
//     const print = (node, level) => {
//         if (!node) return false
        
//         if (level === 1) return true
        
//         let left = print(node.left, level - 1)
//         let right = print(node.right, level - 1)
        
//         return left || right
//     }
    
//     while (print(root, level)) {
        
//         level++
//     }
    
//     return res
// }

var levelOrder = function(root) {
    if (!root) return []
    const res = []
    const queue = [root]
    
    while(queue.length) {
        const length = queue.length
        const currentLevel = []
        
        for (let i = 0; i < length; i++) {
            const current = queue.shift()
            currentLevel.push(current.val)
            
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            
        }
        res.push([...currentLevel])
    }
    
    return res
    
};