// https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list

/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    
    //Edge case: If the list is empty (i.e., the given node is null), you should create a new         //single circular list and return the reference to that single node. 
    
    if (!head) {
        head = new Node(insertVal)
        head.next = head
        return head
    }
    
    //Case 1: insertVal is > current and < next
    if (insertVal >= head.val && insertVal <= head.next.val) {
        head.next = new Node(insertVal, head.next)
        return head
    }
    
    //Define 2-pointers to traverse list
    let slow = head.next
    let fast = slow.next
    
    while(slow !== head) {
        let toInsert = false
        
        if (insertVal >= slow.val && insertVal <= fast.val) toInsert = true
        
        if (slow.val > fast.val) {
            if (insertVal >= slow.val || insertVal <= fast.val) {
                toInsert = true
            }
        }
        if (toInsert) {
            slow.next = new Node(insertVal, fast)
            return head
        }
        slow = fast
        fast = fast.next
    }
    slow.next = new Node(insertVal, fast)
    return head
    
    
};