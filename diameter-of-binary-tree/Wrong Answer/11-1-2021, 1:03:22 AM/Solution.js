// https://leetcode.com/problems/diameter-of-binary-tree

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
var diameterOfBinaryTree = function(root) {
    let nodeValues = []
    
    const dfs = (node) => {
        if (!node) return
        nodeValues.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    
    dfs(root)
    
    if (nodeValues.length === 1) return 0
    if (nodeValues.length % 2 === 0) return nodeValues.length/2
    return Math.ceil(nodeValues.length/2)
    
};