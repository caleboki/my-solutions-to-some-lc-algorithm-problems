// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let res = []
    
    const dfs = (node, i) => {
        if (!node) return
        
        if (!res[i]) res.push([])
        
        if (i % 2 === 0) {
            res[i].push(node.val)
        } else {
            res[i].unshift(node.val)
        }
        
        dfs(node.left, i+1)
        dfs(node.right, i+1)
        

    }
    
    dfs(root, 0)
    return res
    
    
    
};