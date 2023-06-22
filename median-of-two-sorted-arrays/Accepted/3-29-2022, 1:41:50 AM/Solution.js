// https://leetcode.com/problems/median-of-two-sorted-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //let num = [...nums1, ...nums2]
    //num.sort((a, b) => {return a-b})
    
    let i = 0, j = 0
    let num = []
    
    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] < nums2[j]) {
          num.push(nums1[i])
          i++
        } else if (nums1[i] > nums2[j]) {
          num.push(nums2[j])
          j++;
        } else if(nums1[i] === nums2[j]) {
            num.push(nums1[i])
            num.push(nums2[j])
            i++
            j ++
        } else { //control goes to this block if any array becomes empty
            if(nums1.length === i){
                num.push(...nums2.splice(j))
            } else if(nums2.length === j){
                num.push(...nums1.splice(i))
            }
        }
    }
   
    if (num.length % 2 > 0) return num[(num.length-1)/2]
    return (num[(num.length/2)] + num[(num.length/2) - 1])/2
};