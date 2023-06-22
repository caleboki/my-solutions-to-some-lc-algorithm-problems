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


// var treeToDoublyList = function(root) {
    
//     let head, prev
    
//     const dfs = (node) => {
//         if (!node) return
        
//         if (node.left) dfs(node.left)
        
//         if (!head) head = node
//         if (prev) {
//             prev.next = node
//             node.prev = prev
//         }
//         prev = node
        
//         if (node.right) dfs(node.right)
//     }
    
//     dfs(root)
//     prev.next = head
//     head.prev = prev
//     console.log(head)
//     return head
// };

var treeToDoublyList = function(root) {
    if (!root) return
    let head = null, prev = null
    
    const dfs = (node) => {
        if (!node) return
        
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