// https://leetcode.com/problems/find-mode-in-binary-search-tree

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
var findMode = function(root) {
   
    const map = {}
    
    const dfs = (node) => {
        if (!node) return
        
        if (map[node.val] === undefined) {
            map[node.val] = 1
        }else {
            map[node.val]++
        }
        
        dfs(node.left)
        dfs(node.right)
    }
    
    dfs(root)
    
    let max = 0
    
    const freq = Object.values(map)
    
    for (f of freq) {
        if (f > max) max = f
    }
    
    return Object.keys(map).filter(f => map[parseInt(f)] === max)
};