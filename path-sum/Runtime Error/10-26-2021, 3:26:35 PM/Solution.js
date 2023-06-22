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
    
    sum += root.val
    const left = hasPathSum(root.left, sum)
    const right = hasPathSum(root.right, sum)
    
    if (!left && !right) return (sum === 0)
    
    
    return hasPath(root.left, sum) || hasPath(root.right, sum)
    
};