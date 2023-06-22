// https://leetcode.com/problems/delete-leaves-with-a-given-value

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
 * @return {TreeNode}
 */

var removeLeafNodes = function(root, target) {
    
    if(root.left) root.left = removeLeafNodes(root.left, target)
    if(root.right) root.right = removeLeafNodes(root.right, target)
    
    if (!root.left && !root.right && root.val === target) {
        root = null
    } 
    return root
};