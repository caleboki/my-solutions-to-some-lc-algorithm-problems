// https://leetcode.com/problems/sort-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums
    let mid = Math.floor(nums.length/2)
    
    let pivot = nums.splice(mid, 1), left = [], right = [], newData = []
    
    for (let num of nums) {
        if (num < pivot) {
            left.push(num)
        } else {
            right.push(num)
        }
    }
    
    return [...sortArray(left), pivot, ...sortArray(right)]
};

//USING HEAP SORT

// class minHeap {
//     constructor() {
//         this.heap = []
//     }
    
//     parentIndex(index) {
//         return Math.floor((index-1)/2)
//     }
    
//     leftChildIndex(index) {
//         return (2*index + 1)
//     }

//     rightChildIndex(index){
//         return (2*index + 2)
//     }

//     parent(index) {
//         return this.heap[this.parentIndex[index]]
//     }
    
//     insert(data) {
//         this.heap.push(data)
//         this.heapifyUp()
//     }
    
//     delete() {
//         let item = this.heap.shift()
//         this.heap.unshift(this.heap.pop())
//         this.heapifyDown()
        
//         return item
//     }
    
//     swap(a, b) {
//         let temp = this.heap[a]
//         this.heap[a] = this.heap[b]
//         this.heap[b] = temp
//     }
    
//     heapifyUp() {
//         let index = this.heap.length - 1
//         let parent = this.parentIndex(index)

//         while (this.heap[parent] && this.heap[parent] > this.heap[index]) {
//           this.swap(parent, index)
//           index = this.parentIndex(index)
//           parent = this.parentIndex(index)
//         }
//     }
    
//     heapifyDown() {
//         let index = 0
//         let leftChild = this.leftChildIndex(index)
//         let rightChild = this.rightChildIndex(index)
        
//         while (this.heap[leftChild] && this.heap[leftChild] < this.heap[index] || this.heap[rightChild] < this.heap[index] ) 
//         {
//             let max = leftChild

//             if(this.heap[rightChild] && this.heap[rightChild] < this.heap[max]){
//                 max = rightChild
//             }
//             this.swap(max, index)
//             index = max
//             leftChild = this.leftChildIndex(max)
//             rightChild = this.rightChildIndex(max)

//         }
//     }
    
// }

// const sortArray = (nums) => {
//     let result = [], heap1 = new minHeap()
    
//     for (let i = 0; i < nums.length; i++) {
//         heap1.insert(nums[i])
//     }
    
//     for (let i = 0; i < nums.length; i++) {
//         result.push(heap1.delete())
//     } 
//     return result
    
// }