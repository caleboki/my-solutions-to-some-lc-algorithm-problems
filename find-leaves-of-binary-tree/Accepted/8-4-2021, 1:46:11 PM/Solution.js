// https://leetcode.com/problems/find-leaves-of-binary-tree

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

var findLeaves = function(root) {
    let result = []
    
    const dfs = (node, list) => {
        if (!node) return null
        
        //if we are at leaf node
        if (!node.left && !node.right) {
            list.push(node.val)
            return null
        }
        node.left = dfs(node.left, list)
        node.right = dfs(node.right, list)
       
        return node
    }
    
    //repeatedly call dfs while there are still nodes in the tree
    while (root.left !== null || root.right !== null) {
        let temp = []
        dfs(root, temp) //gets leaf nodes for each level?
        result.push(temp)
    }
    
    result.push([root.val])
    return result
}