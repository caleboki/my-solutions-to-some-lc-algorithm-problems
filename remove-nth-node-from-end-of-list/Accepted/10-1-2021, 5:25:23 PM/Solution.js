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
    let prev = dummy;
    let node = head;
    let count = 1;
    while (node.next) {
        if (count === n) {
            prev = prev.next;
        } else {
            count++;
        }
        node = node.next;
    }
    prev.next = prev.next.next;
    return dummy.next;
    
};