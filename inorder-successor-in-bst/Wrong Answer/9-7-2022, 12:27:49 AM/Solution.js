// https://leetcode.com/problems/inorder-successor-in-bst

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    
    let stack = [root]
    
    while (stack.length) {
        let current = stack.pop()
        if (current.right) stack.push(current.right)
        if (current.val > p.val) return current
        if (current.left) stack.push(current.left)
    }
    
    return null
};