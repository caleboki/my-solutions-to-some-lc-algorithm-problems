// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    if (!preorder.length || !inorder.length) return null
    
    let tree = new TreeNode(preorder[0]) //first element is always the root of the tree in preorder
    let mid = inorder.indexOf(preorder[0])
    
    tree.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid))
    tree.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    
    return tree
};