// https://leetcode.com/problems/subtree-of-another-tree

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false
    if (isSameTree(root, subRoot)) return true
    
    return (isSameTree(root.left, subRoot) || isSameTree(root.right, subRoot))
};

const isSameTree = (root, subRoot) => {
    
    if (!root && !subRoot) return true
    if (!root || !subRoot) return false
    if (root.val !== subRoot.val) return false
    
    return (isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right))
}