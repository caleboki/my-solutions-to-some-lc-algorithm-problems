// https://leetcode.com/problems/symmetric-tree

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
var isSymmetric = function(root) {
    
    const isMirror = (p, q) => {
        if (!p && !q) return true
        if (!p || !q) return false
        
        return (p.val === q.val) && isMirror(p.right, q.left) && isMirror(p.left, q.right)
    }
    
    return isMirror(root, root)
    
};