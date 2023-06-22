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
   let visited = new Set()
   
   //traversing B and storing its nodes
   while (headB !== null) {
       visited.add(headB)
       //move to next node
       headB = headB.next  
   }
    
    //traversing A and checking if current node exists in hash set
    while (headA !== null) {
        if (visited.has(headA)) {
            return headA
        } else {
            headA = headA.next
        }
    }
    return null
};