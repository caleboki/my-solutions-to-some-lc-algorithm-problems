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

// If the node has a right child, and hence its successor is somewhere lower in the tree. Go to the right once and then as many times to the left as you could. Return the node you end up with.

// Node has no right child, and hence its successor is somewhere upper in the tree. Go up till the node that is left child of its parent. The answer is the parent.

var inorderSuccessor = function(node) {
    const goDown = (node) => {
        if (!node.left) return node
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