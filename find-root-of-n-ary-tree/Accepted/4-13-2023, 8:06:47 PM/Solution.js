// https://leetcode.com/problems/find-root-of-n-ary-tree

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
    // Use a map to keep track of nodes and their corresponding parent nodes
    const parents = new Map();
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children) {
            for (let j = 0; j < node.children.length; j++) {
                const child = node.children[j];
                parents.set(child, node);
            }
        }
    }
    // Traverse the tree from a leaf node to the root
    let root = null;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (!parents.has(node)) {
            root = node;
            break;
        }
    }
    while (parents.has(root)) {
        root = parents.get(root);
    }
    return root;
};
