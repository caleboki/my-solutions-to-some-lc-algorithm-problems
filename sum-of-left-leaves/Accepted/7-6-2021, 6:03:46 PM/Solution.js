// https://leetcode.com/problems/sum-of-left-leaves

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

var sumOfLeftLeaves = function(root) {
    if (root === null) return 0
    
    const preOrderTraversal = (subtree, isLeft) => {
        if (subtree.left === null && subtree.right === null) return isLeft ? subtree.val : 0
        
        let sum = 0
        if (subtree.left !== null) sum += preOrderTraversal(subtree.left, true)
        if (subtree.right !== null) sum += preOrderTraversal(subtree.right, false)
        
        return sum  
    }
    
    return preOrderTraversal(root, false)
}

