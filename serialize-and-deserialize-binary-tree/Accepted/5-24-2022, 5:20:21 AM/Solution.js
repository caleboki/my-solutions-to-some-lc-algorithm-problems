// https://leetcode.com/problems/serialize-and-deserialize-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const nodeValues = []
    
    const dfs = (node) => {
        
        if (!node) {
            nodeValues.push('NULL')
            return
        }
        
        nodeValues.push(node.val), dfs(node.left), dfs(node.right)
    }
    dfs(root)
    return nodeValues.toString()
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',')
    
    let i = 0
    
    const dfs = () => {
        if (data[i] === 'NULL') {
            i++
            return null
        }
        
        let tree = new TreeNode(+data[i])
        i++
        tree.left = dfs()
        tree.right = dfs()
        
        return tree
    }
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */