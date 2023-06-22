// https://leetcode.com/problems/design-linked-list


// var MyLinkedList = function() {
    
// };

// /** 
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(index) {
    
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
    
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
    
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
    
// };

// /** 
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
    
// };

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next 
  }
}

class MyLinkedList {
  constructor() {
    this.head = null
    this.len = 0
  }

  get(index) {
    if (index < 0 || index >= this.len) return -1

    let cur = this.head
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.val
  }

  addAtHead(val) {
    let node = new ListNode(val)
    node.next = this.head
    this.head = node
    this.len++
  }

  addAtTail(val) {
    if (this.head === null) {
      this.addAtHead(val)
      return
    }

    let node = new ListNode(val)
    let cur = this.head
    for (let i = 0; i < this.len - 1; i++) {
      cur = cur.next
    }
    cur.next = node
    this.len++
  }

  addAtIndex(index, val) {
    if (this.head === null || index === 0) {
      this.addAtHead(val)
      return
    }
    if (index === this.len) {
      this.addAtTail(val)
      return
    }
    if (index > this.len) return

    let node = new ListNode(val)
    let cur = this.head
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next
    }
    node.next = cur.next
    cur.next = node
    this.len++
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.len) return
    if (index === 0) {
      this.head = this.head.next
      return this.len--
    }

    let cur = this.head
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next
    }
    cur.next = cur.next.next
    this.len--
  }
}