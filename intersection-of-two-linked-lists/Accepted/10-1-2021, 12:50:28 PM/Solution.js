// https://leetcode.com/problems/intersection-of-two-linked-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let setA = new Set()
    
    while (headA) { 
        setA.add(headA)
        headA = headA.next
    }
    
    while (headB) {
        if (setA.has(headB)) return headB
        headB = headB.next
    }
    return null
    
};