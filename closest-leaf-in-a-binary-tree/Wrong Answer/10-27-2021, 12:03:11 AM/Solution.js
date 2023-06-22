// https://leetcode.com/problems/closest-leaf-in-a-binary-tree

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
 * @param {number} k
 * @return {number}
 */
var findClosestLeaf = function(root, k) {
    
    const findK = (root, k) => {
        if (!root) return null
        if (root.val === k) return root
        
        const left = findK(root.left, k)
        const right = findK(root.right, k)
        
        if (left) return left
        if (right) return right
        
        return null
    }
    
    const node = findK(root, k)
    
    if (!node) return null
    const queue = [node]
    
    while (queue.length) {
        const current = queue.shift()
        
        if (!current.left && !current.right) return current.val
        
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    return root.val
};