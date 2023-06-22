// https://leetcode.com/problems/validate-binary-search-tree

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    let isValid = true
    
    const dfs = (node) => {
        if (!node) return
        
        let left = dfs(node.left)
        let right = dfs(node.right)
        
        if (node.val > left) isValid = false
        if (node.val < right) isValid = false
    }
    
    dfs(root)
    
    return isValid
    
};