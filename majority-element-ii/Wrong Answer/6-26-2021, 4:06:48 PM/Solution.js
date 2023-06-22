// https://leetcode.com/problems/majority-element-ii

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    let targetFreq = nums.length/3
    let freqMap = {}
    let result = []
    
    for (n of nums) {
        
        if (freqMap[n] === undefined) {
            freqMap[n] = 1
        } else {
            freqMap[n]++
        }
    }
    
    let values = Object.values(freqMap).filter(f => f > targetFreq)
    console.log(freqMap)
    console.log(values)
    console.log(targetFreq)
    
    // console.log(values.filter(f => f > targetFreq))
    // console.log(freqMap)
    // console.log(Object.keys(freqMap).filter(k => freqMap[k] === 2))
    
    for (let i = 0; i < values.length; i++) {
        let keys = Object.keys(freqMap).filter(k => freqMap[k] === values[i])
        console.log(keys)
        result.push(keys)
        
        
    }
    return result
    
};