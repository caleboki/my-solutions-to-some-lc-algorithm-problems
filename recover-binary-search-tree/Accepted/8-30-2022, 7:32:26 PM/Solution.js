// https://leetcode.com/problems/recover-binary-search-tree

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
var recoverTree = function(root) {
    let nodes = [], k = 0
    
    let dfs = (root) => {
        if (!root) return
        dfs(root.left)
        nodes.push(root.val)
        dfs(root.right)
    }
    
    let recover = (root) => {
        if (!root) return null
        recover(root.left)
        root.val = nodes[k]
        k++
        recover(root.right)
    }
    
    dfs(root)
    nodes.sort((a, b) => a - b)
    
    recover(root)
    
    return root
};