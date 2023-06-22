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

// var removeNthFromEnd = function(head, n) {
//     let dummy = new ListNode(0, head);
//     let slow = dummy;
//     let fast = head;
//     let count = 1;
//     while (fast.next) {
//         if (count === n) {
//             slow = slow.next;
//         } else {
//             count++;
//         }
//         fast = fast.next;
//     }
//     slow.next = slow.next.next;
//     return dummy.next;
// };

const removeNthFromEnd = (head, n) => {
    let arr = [], current = head
    
    while (current) {
        arr.push(current.val)
        current = current.next
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        n--
        if (n <= 0) {
            arr.splice(i, 1)
            break
        } 
    }
    
    let newHead = null, ln = null
    
    for (let a of arr) {
        if (newHead === null) {
            newHead = new ListNode(a)
            ln = newHead
        } else {
            ln.next = new ListNode(a)
            ln = ln.next
        }
    }
    
    return newHead
    
    
}



