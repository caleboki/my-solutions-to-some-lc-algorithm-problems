// https://leetcode.com/problems/insertion-sort-list

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
// const insertionSortList = (head) => {
//     const extractValues = (head) => {
//         let values = [], current = head
    
//         while (current) {
//             values.push(current.val)
//             current = current.next
//         }
//         return values
//     }
    
//     const sortList = (arr) => {
//         for (let i = 1; i < arr.length; i++) {
//             let currentIndex = i
//             while (currentIndex > 0 && arr[currentIndex - 1] > arr[currentIndex]) {
//                 let temp = arr[currentIndex]
//                 arr[currentIndex] = arr[currentIndex - 1]
//                 arr[currentIndex - 1] = temp
//                 currentIndex--
//             }
//         }
//         return arr
//     }
    
//     const buildList = (arr) => {
//         arr = sortList(arr)
        
//         let head = null, ln = null
        
//         for (let i = 0; i < arr.length; i++) {
//             if (head === null) {
//                 head = new ListNode(arr[i])
//                 ln = head
//             } else {
//                 ln.next = new ListNode(arr[i])
//                 ln = ln.next
//             }
//         }
//         return head
//     }
    
//     const values = extractValues(head)
//     return buildList(values)
// }

// const insertionSortList = (head) => {
//     let dummy = new ListNode(), current = head

//     while (current) {
//         let prev = dummy

//         while (prev.next && prev.next.val <= current.val) {
//             prev = prev.next
//         }

//         let temp = current.next
//         current.next = prev.next
//         prev.next = current

//         current = temp
//     }
//     return dummy.next
// }

var insertionSortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    // Check for cycles
    let visited = new Set();
    let current = head;
    while (current) {
        if (visited.has(current)) {
            // Found a cycle
            //throw new Error('Found cycle in the ListNode');
            return
        }
        visited.add(current);
        current = current.next;
    }
    
    // Sort the list
    let dummy = new ListNode();
    let prev = dummy;
    let curr = head;
    
    while (curr) {
        let nextNode = curr.next;
        
        // Find the right position to insert curr
        while (prev.next && prev.next.val < curr.val) {
            prev = prev.next;
        }
        
        // Insert curr
        curr.next = prev.next;
        prev.next = curr;
        
        // Reset prev for the next iteration
        prev = dummy;
        curr = nextNode;
    }
    
    return dummy.next;
};




