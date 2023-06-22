// https://leetcode.com/problems/remove-duplicates-from-sorted-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
    let current = head
    
    while (current && current.next) {
        if (current.next.val === current.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    
    return head
    
};