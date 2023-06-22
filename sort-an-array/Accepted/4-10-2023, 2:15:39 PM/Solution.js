// https://leetcode.com/problems/sort-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function(nums) {
//     if (nums.length <= 1) return nums
//     let mid = Math.floor(nums.length/2)
    
//     let pivot = nums.splice(mid, 1), left = [], right = [], newData = []
    
//     for (let num of nums) {
//         if (num < pivot) {
//             left.push(num)
//         } else {
//             right.push(num)
//         }
//     }
    
//     return [...sortArray(left), pivot, ...sortArray(right)]
// };

//USING HEAP SORT

class MinHeap{
  constructor(){
      this.storage = [];
      this.size = 0;
  }

  getLeftChildIndex(index){
      return 2 * index + 1;
  }

  getRightChildIndex(index){
      return 2 * index + 2;
  }

  getParentIndex(index){
      return Math.floor((index - 1) / 2)
  }

  hasLeftChild(index){
      return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index){
      return this.getRightChildIndex(index) < this.size;
  }

  hasParent(index){
      return this.getParentIndex(index) >= 0;
  }

  leftChild(index){
      return this.storage[this.getLeftChildIndex(index)];
  }

  rightChild(index){
      return this.storage[this.getRightChildIndex(index)];
  }

  parent(index){
      return this.storage[this.getParentIndex(index)];
  }

  isFull(){
      return this.size == this.capacity;
  }

  swap(index1,index2){
      let temp = this.storage[index1];
      this.storage[index1] = this.storage[index2];
      this.storage[index2] = temp;
  }

  insert(data){
      this.storage[this.size] = data;
      this.size += 1;
      this.heapifyUp();
  }

  heapifyUp(){
       let index = this.size - 1;
       while(this.hasParent(index) &&
               this.parent(index) > this.storage[index]){
          this.swap(this.getParentIndex(index),index);
          index = this.getParentIndex(index);
       }
  }

  removeMin(){
      if(this.size == 0)
          throw new Error("Empty Heap");
      let data = this.storage[0];
      this.storage[0] = this.storage[this.size - 1];
      this.size -= 1;
      this.heapifyDown();
      return data;
  }

  heapifyDown(){
      let index = 0;
      while(this.hasLeftChild(index)){
          let smallerChildIndex = this.getLeftChildIndex(index);
          if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index))
              smallerChildIndex = this.getRightChildIndex(index);
          if(this.storage[index] < this.storage[smallerChildIndex])
              break;
          else
              this.swap(index,smallerChildIndex);
          index = smallerChildIndex;
      }
  }
}

const sortArray = (nums) => {
    let result = [], heap1 = new MinHeap()
    
    for (let i = 0; i < nums.length; i++) {
        heap1.insert(nums[i])
    }
    
    for (let i = 0; i < nums.length; i++) {
        result.push(heap1.removeMin())
    } 
    return result
}

// const sortArray = (nums) => {
//     let mid = Math.floor(nums.length/2)
    
//     if (nums.length <= 1) return nums
    
//     let left = nums.splice(0, mid)
//     let right = nums
    
//     const merge = (l, r) => {
//         let result = []
        
//         while (l.length > 0 && r.length > 0) {
//             if (l[0] < r[0]) {
//                 result.push(l.shift())
//             } else {
//                 result.push(r.shift())
//             }
//         }
//         return [...result, ...l, ...r]
//     }
    
//     return merge(sortArray(left), sortArray(right))
// }

// const sortArray = (nums) => {
    
//     const selectionSort = (nums) => {
//         let minIndex

//         for (let i = 0; i < nums.length; i++) {
//             minIndex = i

//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[j] < nums[minIndex]) minIndex = j
//             }

//             let temp = nums[minIndex]
//             nums[minIndex] = nums[i]
//             nums[i] = temp
//         }
//         return nums
//     }

//     return selectionSort(nums)
// }