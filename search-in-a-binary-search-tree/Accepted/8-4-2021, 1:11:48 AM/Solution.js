// https://leetcode.com/problems/search-in-a-binary-search-tree

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
   
    if (root === null || root.val === val) return root
    
    if (root.val < val) {
        return root.right = searchBST(root.right, val)
    } else if (root.val > val) {
        return root.left = searchBST(root.left, val)
    } else {
        return root
    }

    
};