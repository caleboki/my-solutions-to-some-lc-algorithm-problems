// https://leetcode.com/problems/kth-smallest-element-in-a-bst

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let nodeValues = []
    
    const dfs = (node) => {
        if (!node) return
        dfs(node.left)
        nodeValues.push(node.val)
        dfs(node.right)
        
    }
    dfs(root)
    
    let i = k - 1
    
    while (i < nodeValues.length) {
        if (nodeValues[i] !== nodeValues[i-1]) return nodeValues[i]
        i++
    }
    
    return -1  
};