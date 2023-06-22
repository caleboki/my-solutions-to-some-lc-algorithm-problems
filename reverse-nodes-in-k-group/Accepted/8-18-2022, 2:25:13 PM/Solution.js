// https://leetcode.com/problems/reverse-nodes-in-k-group

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function(head, k) {
    
//     let newHead = null, ln = null, current = head, count = 1
    
//     const reverseList = (list) => {}
    
//     const mergeList = (l1, l2) => {
//         return l1
//     }
    
//     while (current) {
//         if (newHead === null) {
//             newHead = new ListNode(current.val)
//             ln = newHead
//         } else {
//             ln.next = new ListNode(current.val)
//             ln = ln.next
//         }
//         current = current.next
//         count++ 
        
//         if (count === k) {
//             let reversed = reverseList(newHead)
//             mergeList(null, reversed)
            
//         }
//     }
    
// };

// const reverseKGroup = (head, k) => {
//     let dummy = new ListNode(0, head)
//     let groupPrev = dummy
    
//     const getKth = (curr, k) => {
//         while (curr && k > 0) {
//             curr = curr.next
//             k--
//         }
//         return curr
//     }
    
//     while () {
//            getKth(groupPrev, k)
//            }
// }

const reverseKGroup = (head, k) => {
    let count = 0, current = head
    
    const reverseLinkedList = (list, n) => {
        let previous = null
        let current = list
        
        while (n > 0) {
            let temp = current.next
            current.next = previous
            previous = current
            
            current = temp
            
            n--
        }
        
        return previous
    }
    
    while (count < k && current !== null) {
        current = current.next
        count++
    }
    
    if (count === k) {
        let reversedHead = reverseLinkedList(head, k)
        head.next = reverseKGroup(current, k)
        return reversedHead
    }
    
    return head
    
}