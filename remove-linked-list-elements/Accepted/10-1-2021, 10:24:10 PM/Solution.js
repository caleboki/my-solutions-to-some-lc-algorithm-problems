// https://leetcode.com/problems/remove-linked-list-elements

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newNode = new ListNode(0)
    newNode.next = head
    
    let previous = newNode
    let current = head
    
    while (current) {
        if (current.val === val) {
            previous.next = current.next
        } else {
            previous = current
        }
        current = current.next
    }
    return newNode.next
    
    
};

