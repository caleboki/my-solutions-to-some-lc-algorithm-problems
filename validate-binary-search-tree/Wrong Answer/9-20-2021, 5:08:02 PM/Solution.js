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
        
        let current = node.val
       
        let left = dfs(node.left)
        let right = dfs(node.right)
        
        if ((left !== null) && (left >= current)) {
            isValid = false
            return
        }
        
        if ((right !== null) && (right <= current)) {
            isValid = false
            return
        }
        
        if (node.val === null) return current
        return node.val
    }
    
    dfs(root)
    
    return isValid
    
};