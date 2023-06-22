// https://leetcode.com/problems/path-sum

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false
    
    targetSum -= root.val
    const left = hasPathSum(root.left, targetSum)
    const right = hasPathSum(root.right, targetSum)
    
    if (!left && !right) return (sum === 0)
    
    
    return hasPath(root.left, targetSum) || hasPath(root.right, targetSum)
    
};