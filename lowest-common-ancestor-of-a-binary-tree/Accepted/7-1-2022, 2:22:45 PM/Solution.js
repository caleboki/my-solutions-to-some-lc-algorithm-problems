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

// Traverse the tree in a depth first manner. The moment you encounter either of the nodes p or q, return some boolean flag. The flag helps to determine if we found the required nodes in any of the paths. The least common ancestor would then be the node for which both the subtree recursions return a True flag. It can also be the node which itself is one of p or q and for which one of the subtree recursions returns a True flag.

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

