// https://leetcode.com/problems/count-complete-tree-nodes

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
var countNodes = function(root) {
    if (root === null || root === []) return 0
    
    let count = 0
    const preOrderTraversal = (node) => {
        if (!node) return
        count++
        preOrderTraversal(node.left)
        preOrderTraversal(node.right)
    }
    preOrderTraversal(root)
    return count
    
};