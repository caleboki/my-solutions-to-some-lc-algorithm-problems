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
  let sum = 0
  
  const preOrderTraversal = (node) => {
      if (!node) return
      
      if (node.left !== null) sum += node.left.val
      
      preOrderTraversal(node.left)
      preOrderTraversal(node.right)
  }
  
  preOrderTraversal(root)
  return sum
    
    
};