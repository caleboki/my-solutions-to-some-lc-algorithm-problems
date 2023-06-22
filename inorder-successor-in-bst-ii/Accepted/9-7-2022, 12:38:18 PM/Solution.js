// https://leetcode.com/problems/inorder-successor-in-bst-ii

/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function(node) {
    const goDown = (node) => {
        if (!node || !node.left) return node
        return goDown(node.left)
    }
    
    const goUp = (node, val) => {
        if (!node) return node
        if (node.val > val) return node
        return goUp(node.parent, val)
    }
    if (node.right) return goDown(node.right)
    return goUp(node.parent, node.val)
    
    
};