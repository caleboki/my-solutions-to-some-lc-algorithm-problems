// https://leetcode.com/problems/closest-binary-search-tree-value

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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let min = Infinity, node
    
    const dfs = (root, target) => {
        if (!root) return
        dfs(root.left, target)
        let diff = Math.abs(root.val - target)
        if (diff < min) {
            min = diff
            node = root
        }
        dfs(root.right, target)
    }
    
    dfs(root, target)
    
    return node.val
};