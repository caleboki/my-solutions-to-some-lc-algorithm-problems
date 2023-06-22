// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = null   
    const dfs = (node) => {
        if (!node) return false
        
        let left = dfs(node.left, p, q) ? 1 : 0
        let right = dfs(node.right, p, q) ? 1 : 0
        let mid = (node === p || node === q) ? 1 : 0
        
        if (mid + left + right >= 2) ans = node
        
        return (mid + left + right > 0)
    }
    
    dfs(root, p, q)
    return ans
};

