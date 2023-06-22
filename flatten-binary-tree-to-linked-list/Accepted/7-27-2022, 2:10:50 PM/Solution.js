// https://leetcode.com/problems/flatten-binary-tree-to-linked-list

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

//More investigation needed: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solution/

var flatten = function(root) {
  const dfs = (node) => {
      if (!node) return null
      
      if (!node.left && !node.right) return node
      
      let left = dfs(node.left)
      let right = dfs(node.right)
      
      if (left !== null) {
          left.right = node.right
          node.right = node.left
          node.left = null
      }
      
      return right === null ? left : right
  }
  
  dfs(root)
};