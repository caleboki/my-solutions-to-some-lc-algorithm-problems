// https://leetcode.com/problems/maximum-depth-of-binary-tree

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
 * @return {number}
 */
// var maxDepth = function(root) {
//     if (root === null) return 0
    
//     let left = maxDepth(root.left)
//     let right = maxDepth(root.right)
    
//     return Math.max(left, right) + 1
    
// };

const maxDepth = (root) => {
    if (!root) return 0
    let depth = 0, queue = [root]
    
    while (queue.length) {
        let size = queue.length
        
        for (let i = 0; i < size; i++) {
            let current = queue.shift()
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        depth++
    }
    
    return depth
    
    
}