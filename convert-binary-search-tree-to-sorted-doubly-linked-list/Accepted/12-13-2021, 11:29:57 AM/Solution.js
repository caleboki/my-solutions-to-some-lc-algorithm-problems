// https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list

/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

//https://www.youtube.com/watch?v=8-ErlqTsFN0
var treeToDoublyList = function(root) {
    if (!root) return
    
    let head = null, prev = null
    
    const dfs = (node) => {
        
        if (node.left) dfs(node.left)
        
        if (!prev) {
            head = node
        } else {
            node.left = prev
            prev.right = node
        }
        prev = node
        
        if (node.right) dfs(node.right)
    }
    
    dfs(root)
    
    prev.right = head
    head.left = prev
    
    return head
};