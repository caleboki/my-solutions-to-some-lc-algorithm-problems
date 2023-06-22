// https://leetcode.com/problems/sort-characters-by-frequency

/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function(s) {
//     let freqMap = {}
//     let bucket = []
//     let output = ''
    
//     for (a of s) {
//         if (freqMap[a] === undefined) {
//             freqMap[a] = 1
//         } else {
//             freqMap[a]++
//         }
//     }
    
//     // for(let [char, freq] of freqMap) {
//     //     if(bucket[freq] === undefined) bucket[freq] = [char];
//     //     else bucket[freq].push(char);
//     // }
  
    
//     let values = Object.values(freqMap)
//     let keys = Object.keys(freqMap)
    
//     for (let i = 0; i < values.length; i++) {
//         if(bucket[keys[i]] === undefined) {
//             bucket[keys[i]] = [values[i]]
//         } else {
//             bucket[keys[i]].push(values[i])
//         }
        
//     }
//     console.log(bucket.length-1)
//     for (let i = bucket.length - 1; i >= 0; i--) {
//         console.log('oo')
        
        
        
//     }
    
    
//     // console.log(bucket)
//     // console.log(freqMap)
    
   
    
// };

var frequencySort = function(s) {
    const freqMap = new Map();
    const bucket = [];
    let output = ''
    
    for(let c of s) {
        freqMap.set(c, (freqMap.get(c) || 0) + 1);
    }
    
    for(let [char, freq] of freqMap) {
        if(bucket[freq] === undefined) bucket[freq] = [char];
        else bucket[freq].push(char);
    }
    console.log(bucket)
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i] === undefined) continue;
        
        for(let char of bucket[i]) {
            output += char.repeat(i);
        }
    }
    return output;    
};