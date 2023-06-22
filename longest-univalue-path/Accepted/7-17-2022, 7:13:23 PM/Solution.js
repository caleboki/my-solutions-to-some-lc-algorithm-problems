// https://leetcode.com/problems/longest-univalue-path

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
var longestUnivaluePath = function(root) {
    let res = 0
    const dfs = (node) => {
        if (!node) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        let arrowLeft = 0, arrowRight = 0
        
        if (node.left && node.left.val === node.val) arrowLeft += left + 1
        if (node.right && node.right.val === node.val) arrowRight += right + 1
        
        res = Math.max(res, arrowLeft + arrowRight)
        return Math.max(arrowLeft, arrowRight)
        
    }
    dfs(root)
    return res
    
    
};