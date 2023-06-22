// https://leetcode.com/problems/same-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p || !q) return
    
    const dfs = (nodeP, nodeQ) => {
        if (!nodeP && !nodeQ) return true
        
        if (nodeP && nodeQ) {
            dfs(nodeP.left, nodeQ.left)
            if (nodeP.val !== nodeQ.val) return false
            dfs(nodeP.right, nodeQ.right)
        } 
        
       
        
        return false
        
    }
    
    return dfs(p, q)
    
};