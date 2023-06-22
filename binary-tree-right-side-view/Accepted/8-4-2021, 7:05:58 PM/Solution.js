// https://leetcode.com/problems/binary-tree-right-side-view

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


var rightSideView = function(root) {
    let result = []
    
    const dfs = (node, depth = 0) => {
        if (!node) return
        
        if (!result[depth]) result[depth] = node.val //depth ensures that left nodes are not saved unless a right node is NOT present
        
        dfs(node.right, depth + 1)
        dfs(node.left, depth + 1)
        
    }
    dfs(root)
    return result
    
    
    
};