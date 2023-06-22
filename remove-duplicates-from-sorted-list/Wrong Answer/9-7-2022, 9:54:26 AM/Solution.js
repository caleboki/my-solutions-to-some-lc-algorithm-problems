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
var deleteDuplicates = function(head) {
    let list = new Set(), current = head
    
    while (current) {
        list.add(current.val)
        current = current.next
    }
    
    list = Array.from(list)
    
    let newHead = null
    
    for (let i = 0; i < list.length; i++) {
        if (newHead === null) {
            newHead = new ListNode(list[i], newHead)
        } else {
            newHead.next = new ListNode(list[i])
        }
        
    } 
    return newHead
    
    
};