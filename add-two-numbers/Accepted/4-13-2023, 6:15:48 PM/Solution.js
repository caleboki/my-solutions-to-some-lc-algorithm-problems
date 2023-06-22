// https://leetcode.com/problems/add-two-numbers

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
// var addTwoNumbers = function(l1, l2) {
//    let num1 = '', num2 = '', result = '', carrying = false, head
   
//    //convert linkedlists l1 and l2 to strings
//    while (l1) {
//        num1 = num1+l1.val
//        l1 = l1.next
//    }
    
//     while (l2) {
//        num2 = num2+l2.val
//        l2 = l2.next
//     }
    
//     //reversing the order of the digits then converting back to string
//     num1 = num1.split('').reverse().join('')
//     num2 = num2.split('').reverse().join('')
    
//     //Add strings
//     while (num1.length || num2.length) {
        
//         let num = parseInt(num1.substring(num1.length - 1) || 0)
//         +
//         parseInt(num2.substring(num2.length - 1) || 0)
//         +
//         (+carrying) //boolean to integer +carrying is 1 if num >= 10, 0 otherewise.
  
//         carrying = (num >= 10)
        
//         result = `${num.toString().split('')[1] || num}${result}`
//         num1 = num1.slice(0, -1)
//         num2 = num2.slice(0, -1)
//     }
//     result = carrying ? `1${result}`: result
  
//     //Convert result to linkedlist
//     for (let i of result) {
//         head = new ListNode(i, head)
//     }
    
//     return head
// };

const addTwoNumbers = (l1, l2) => {
    let dummy = new ListNode(0), current = dummy, carrying = 0

    while (l1 || l2 || carrying > 0) {
        let x = l1 ? l1.val : 0
        let y = l2 ? l2.val : 0

        let sum = carrying + x + y
        carrying = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return dummy.next

}
