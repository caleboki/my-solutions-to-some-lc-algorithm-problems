// https://leetcode.com/problems/binary-tree-paths

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let strings = []
    
    const dfs = (node, s) => {
        if (!node) return
        
        s += "->" + node.val
        //remove the first -> that was attached to the root
	    if (!node.left && !node.right) strings.push(s.substring(2))
        
        if (node.left) dfs(node.left, s)
        if (node.right) dfs(node.right, s)
    }
    dfs(root, '')
    
    return strings
    
    
};