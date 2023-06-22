// https://leetcode.com/problems/sort-array-by-increasing-frequency

/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function(s) {
//     let freqMap = {}
//     let sOutput = []
//     let dOutput = []
    
//     for (a of s) {
//         if (freqMap[a] === undefined) {
//             freqMap[a] = 1
//         } else {
//             freqMap[a]++
//         }
//     }
    
//     //console.log(freqMap)
    
//     //sorting map by values-important trick to know!
//     let sortedFreqMap = Object.fromEntries(Object.entries(freqMap).sort(([,a],[,b]) => b-a))
   
//     let values = Object.values(sortedFreqMap)
//     let keys = Object.keys(sortedFreqMap)
    
     
   
    
//     for (let i = 0; i < values.length; i++) {
//         if (isNaN(keys[i])) {
//             sOutput.push(keys[i].repeat(values[i])) 
//         } else {
//             dOutput.push(keys[i].repeat(values[i]))
            
//         }
        
//         //if (!isNaN(keys[i])) output.push(keys[i].repeat(values[i]))
        
//     }
    
//     dOutput = dOutput.map(Number)
//     console.log(dOutput)
    
//     return dOutput.join("")
    
   
// };

// T.C - O(nlogn) where n - no of elements in array and logn is T.C of sorting
var frequencySort = function(nums) {
    let map = {}

    for(let num of nums) {
        if(!map[num]) {
            map[num] = 1
        } else {
            map[num]++
        }
    }

    let sortedArray = Object.entries(map).sort((a,b) => {
       if(a[1] == b[1]) {
           return b[0] - a[0]
       } else {
           return a[1] - b[1]
       }
    })

    let result = []

    for(let arr of sortedArray) {
        while(arr[1] > 0) {
            result.push(arr[0])
            arr[1]--
        }
    }

    return result;
};
