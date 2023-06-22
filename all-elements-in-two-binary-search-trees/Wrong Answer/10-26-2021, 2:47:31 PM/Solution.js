// https://leetcode.com/problems/all-elements-in-two-binary-search-trees

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let list = []
    
    const dfs = (root) => {
        if (!root) return
        dfs(root.left)
        list.push(root.val)
        dfs(root.right)
    }
    
    dfs(root1)
    dfs(root2)
    
    return list.sort()
    
};