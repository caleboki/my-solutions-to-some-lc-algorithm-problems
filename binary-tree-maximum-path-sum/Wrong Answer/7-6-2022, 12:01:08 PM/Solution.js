// https://leetcode.com/problems/binary-tree-maximum-path-sum

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
var maxPathSum = function(root) {
    let maxSum = -Infinity
    
    const dfs = (node) => {
        if (!node) return 0
       
        let left = Math.max(dfs(node.left), 0) //Math.max because of -ve nodes
        let right = Math.max(dfs(node.right), 0) //Math.max because of -ve nodes
       
        let path = node.val + left + right
        
        maxSum = Math.max(maxSum, path)
        
        return node.val + left + right
    }
    
    dfs(root)
    return maxSum
};
