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
    const childValues = new Set();
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node && node.children) {
            for (let j = 0; j < node.children.length; j++) {
                const child = node.children[j];
                childValues.add(child);
            }
        }
    }
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node && !childValues.has(node.val)) {
            return node;
        }
    }
    return null;
};
