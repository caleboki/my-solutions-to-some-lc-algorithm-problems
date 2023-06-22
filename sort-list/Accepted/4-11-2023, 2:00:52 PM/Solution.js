// https://leetcode.com/problems/sort-list

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
var sortList = function(head) {
    let current = head, values = []
    
    while (current !== null) {
        values.push(current.val)
        current = current.next 
    }
    values.sort((a, b) => {return a - b})
    
    let newHead = null, ln = null
    
    for (let i = 0; i < values.length; i++) {
        if (newHead === null) {
            newHead = new ListNode(values[i])
            ln = newHead
        } else {
            ln.next = new ListNode(values[i])
            ln = ln.next
        }
    }
    
    return newHead
};