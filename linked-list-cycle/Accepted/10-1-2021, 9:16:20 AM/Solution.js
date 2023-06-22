// https://leetcode.com/problems/linked-list-cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current = head
    let seen = new Map()
    
    while(current) {
        seen.set(current)
        if (seen.has(current.next)) return true
        current = current.next
    }
    return false
    
};