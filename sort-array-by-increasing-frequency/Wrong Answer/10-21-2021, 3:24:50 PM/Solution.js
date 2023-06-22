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

var frequencySort = function(s) {
    let freqMap = {}
    let output = []
    
    for (a of s) {
        if (freqMap[a] === undefined) {
            freqMap[a] = 1
        } else {
            freqMap[a]++
        }
    }
    
    let sortedEntries = Object.entries(freqMap).sort((a,b) => b[1]-a[1])
    sortedEntries.reverse()
    
    for(let i = 0; i < sortedEntries.length; i++){
        for(let j = 0; j < sortedEntries[i][1]; j++) {
            output.push(sortedEntries[i][0])
            
        }
    }
   
    return output
    
   
};

