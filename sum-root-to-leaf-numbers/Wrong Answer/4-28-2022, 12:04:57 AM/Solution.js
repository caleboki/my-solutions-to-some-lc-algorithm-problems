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
        if (!node) return 0
        
        if (!node.left && !node.right) return sum + node.val //leaf node
        sum += node.val
        
        return dfs(node.left, sum) + +dfs(node.right, sum)
    }
    
    return dfs(root, '')
};