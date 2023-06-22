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
    let stack = [root], min = Infinity, node
    
    while (stack.length) {
        let current = stack.pop()
        if (current.left) stack.push(current.left)
        if (current.val > p.val) {
            if (min > current.val) {
                min = current.val
                node = current
            }
            
        }
        if (current.right) stack.push(current.right)
    }
    
    return min === Infinity ? null : node
    
   
    
};