// https://leetcode.com/problems/binary-tree-preorder-traversal

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
 * @return {number[]}
 */
//Preorder: Root, Left, Right
var preorderTraversal = function(root) {
    const nodeValues = []
    
    const dfs = (node) => {
        if (!node) return
        
        nodeValues.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    
    dfs(root)
    return nodeValues
    
    
};