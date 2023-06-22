// https://leetcode.com/problems/sum-root-to-leaf-numbers

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
var sumNumbers = function(root) {
    
    const dfs = (node, sum) => {
        if (!node) return
        
        if (!node.left && !node.right) return sum + +node.val //leaf node
        sum += +root.val
        
        return +dfs(root.left, sum) + +dfs(root.right, sum)
    }
    
    return dfs(root, '')
};