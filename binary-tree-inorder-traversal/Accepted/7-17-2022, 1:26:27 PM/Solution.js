// https://leetcode.com/problems/binary-tree-inorder-traversal

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
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     //Inorder traversal: Left, Root, Right
    
//     const nodeValues = []
    
//     const dfs = (node) => {
//         if (!node) return
        
//         dfs(node.left)
//         nodeValues.push(node.val)
//         dfs(node.right)
//     }
    
//     dfs(root)
    
//     return nodeValues  
// };

const inorderTraversal = (root, result = []) => {
    if (!root) return result
    result.push(...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right))
    return result
}