// https://leetcode.com/problems/linked-list-cycle-ii

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//     let current = head
//     let seen = new Map()
    
//     while(current) {
//         seen.set(current)
//         if (seen.has(current.next)) return current.next
//         current = current.next
//     }
//     return current
// };

const detectCycle = (head) => {
    console.log(head.next)
    if (!head || !head.next) return null
    
    let slow = head, fast = head.next, node
    
    while (slow !== fast) {
        if (!fast || !fast.next) return null
        node = slow
        slow = slow.next
        fast = fast.next.next
    }
    return node
    
}