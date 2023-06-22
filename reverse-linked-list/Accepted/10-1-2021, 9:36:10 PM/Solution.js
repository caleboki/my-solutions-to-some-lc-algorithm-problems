// https://leetcode.com/problems/reverse-linked-list

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
var reverseList = function(head) {
    if (!head || !head.next) return head
    
    let previous = null; //stores already reversed nodes
    let current = head;

    while (current !== null) {
      let temp = current.next; //save next pointer to a temp variable
      current.next = previous; // change current node's next to already reversed node therefore                                  // reversing current
      
      previous = current; //set new reversed node
      current = temp;

    }
    return previous;
    
};