// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list

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
var deleteMiddle = function(head) {
    const getSize = (head) => {
        let count = 0, current = head
        
        while (current) {
            current = current.next
            count++
        }
        return count
    }
    
    let size = getSize(head)
    
    if (size % 2 === 0) {
        size = (size/2)
    } else {
        size = (size-1)/2 + 1
    }
    console.log(size)
    return removeNthFromEnd(head, size)
    
    
};


var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = head;
    let count = 1;
    while (fast.next) {
        if (count === n) {
            slow = slow.next;
        } else {
            count++;
        }
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
    
};
