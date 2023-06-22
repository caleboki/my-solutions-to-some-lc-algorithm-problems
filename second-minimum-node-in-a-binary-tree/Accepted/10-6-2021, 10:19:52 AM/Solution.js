// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree

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
var findSecondMinimumValue = function(root) {
    let nodeValues = []
    
    const dfs = (node) => {
        if (!node) return
        nodeValues.push(node.val)
        dfs(node.left)
        dfs(node.right)
        
    }
    dfs(root)
    
    nodeValues.sort(function(a,b) {return a-b})
    
    let i = 1
    
    while (i < nodeValues.length) {
        if (nodeValues[i] !== nodeValues[i-1]) return nodeValues[i]
        i++
    }
    
    return -1
    
    
};