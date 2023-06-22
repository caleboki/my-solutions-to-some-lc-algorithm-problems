// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let current = head, arr = []

    while (current) {
        arr.push(current.val)
        current = current.next
    }

    const createBST = (left, right) => {
        if (left > right) return null

        const mid = Math.floor((left + right) / 2)
        const root = new TreeNode(arr[mid])
        root.left = createBST(left, mid-1)
        root.right = createBST(mid+1, right)

        return root
    }
    return createBST(0, arr.length - 1)  
};