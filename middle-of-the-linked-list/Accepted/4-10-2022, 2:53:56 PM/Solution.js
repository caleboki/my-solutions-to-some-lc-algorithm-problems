// https://leetcode.com/problems/middle-of-the-linked-list

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
// var middleNode = function(head) {
    
//     const getSize = (head) => {
//         let count = 0
//         let current = head
        
//         while (current) {
//             count++
//             current = current.next
//         }
        
//         return count
//     }
    
//     let size = Math.floor(getSize(head)/2)
    
//     const traverse = (head, length) => {
//         let count = length
//         let current = head
        
//         while (current) {
//             if (count === 0) break
//             count--
//             current = current.next
//         }
        
//         return current
//     }
    
//     return traverse(head, size)
// };

//Alternatively use fast-slow pointer

var middleNode = function(head) {
    let slow = head, fast = head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}