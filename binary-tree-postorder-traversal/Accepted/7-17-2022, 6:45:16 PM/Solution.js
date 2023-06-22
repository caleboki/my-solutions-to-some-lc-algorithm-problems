// https://leetcode.com/problems/binary-tree-postorder-traversal

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
//Postorder: Left, Right, Root
// var postorderTraversal = function(root) {
//     const nodeValues = []
    
//     const dfs = (node) => {
//         if (!node) return
        
//         dfs(node.left)
//         dfs(node.right)
//         nodeValues.push(node.val)  
//     }
    
//     dfs(root)
    
//     return nodeValues
// };

const postorderTraversal = (root, result = []) => {
    if (!root) return result
    result.push(...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val)
    return result
}