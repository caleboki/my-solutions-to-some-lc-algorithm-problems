// https://leetcode.com/problems/remove-nth-node-from-end-of-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//Good explanation here: https://www.youtube.com/watch?v=Kka8VgyFZfc
//Fast and Slow pointer algorithm 
//Time complexity: O(N)
//Space complexity; O(1) no extra memory needed

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = dummy.next;
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



