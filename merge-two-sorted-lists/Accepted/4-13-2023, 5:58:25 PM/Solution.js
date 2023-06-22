// https://leetcode.com/problems/merge-two-sorted-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
   if (!l1 || !l2) return l1 || l2
  
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2) 
        return l1 
    } 
        l2.next = mergeTwoLists(l1, l2.next) 
        return l2 
    
};

// const mergeTwoLists = (l1, l2) => {
//     let arr = []
//     let current = l1
    
//     while (current !== null) {
//         arr.push(current.val)
//         current = current.next
//     }
    
//     current = l2
    
//     while (current !== null) {
//         arr.push(current.val)
//         current = current.next
//     }
    
//     arr.sort((a, b) => {return a-b})
    
//     let head = null, ln = null
    
//     for (let a of arr) {
//         if (head === null) {
            
//             head = new ListNode(a)
//             ln = head
            
//         } else {
//             ln.next = new ListNode(a)
//             ln = ln.next
//         }
//     }
//     return head
    
// }