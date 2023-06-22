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
const insertionSortList = (head) => {
    const extractValues = (head) => {
        let values = [], current = head
    
        while (current) {
            values.push(current.val)
            current = current.next
        }
        return values
    }
    
    const sortList = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            let currentIndex = i
            while (currentIndex > 0 && arr[currentIndex - 1] > arr[currentIndex]) {
                let temp = arr[currentIndex]
                arr[currentIndex] = arr[currentIndex - 1]
                arr[currentIndex - 1] = temp
                currentIndex--
            }
        }
        return arr
    }
    
    const buildList = (arr) => {
        arr = sortList(arr)
        
        let head = null, ln = null
        
        for (let i = 0; i < arr.length; i++) {
            if (head === null) {
                head = new ListNode(arr[i])
                ln = head
            } else {
                ln.next = new ListNode(arr[i])
                ln = ln.next
            }
        }
        return head
    }
    
    let values = extractValues(head)
    
    return buildList(values)
}


