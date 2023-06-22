// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let result
    
    const inOrder = (original, cloned) => {
        if (original !== null) {
            inOrder(original.left, cloned.left)
            if(original === target) result = cloned
            inOrder(original.right, cloned.right)
        }
    }
    
    inOrder(original, cloned)
    return result
};

//Time complexity O(N) where N is the number of nodes
//Space complexity O(H) where H is the height of the tree