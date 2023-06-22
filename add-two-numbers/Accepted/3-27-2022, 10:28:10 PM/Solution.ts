// https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let num1 = '', num2 = '', result = '', carrying = false, head
    
    while (l1) {
        num1 = num1+l1.val
        l1 = l1.next
    }
    
    while (l2) {
        num2 = num2+l2.val
        l2 = l2.next
    }
    
    //reversing the order of the digits then converting back to string
    num1 = num1.split('').reverse().join('')
    num2 = num2.split('').reverse().join('')
    
    //Add strings
    while (num1.length || num2.length) {
        //console.log(parseInt(num2.substring(num2.length - 1) || 0))
        
        let num = parseInt(num1.substring(num1.length - 1) || '0')
        +
        parseInt(num2.substring(num2.length - 1) || '0')
        +
        (+carrying)
  
        carrying = (num >= 10)
        
        result = `${num.toString().split('')[1] || num}${result}`
        num1 = num1.slice(0, -1)
        num2 = num2.slice(0, -1)
    }
    result = carrying ? `1${result}`: result
    
    //Convert result to linkedlist
    for (let i of result) {
        head = new ListNode(parseInt(i), head)
    }
    
    return head

};



