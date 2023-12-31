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
    if (!root) return []
    let result = []
    
    const dfs = (node) => {
        if (!node) return null
        
        result.push(node.val)
            
        node.right = dfs(node.right)
        return node
    }
    dfs(root)
    return result
    
};