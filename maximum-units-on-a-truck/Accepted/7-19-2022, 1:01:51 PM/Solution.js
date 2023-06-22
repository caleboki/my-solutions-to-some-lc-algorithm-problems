// https://leetcode.com/problems/maximum-units-on-a-truck

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
// var maximumUnits = function(boxTypes, truckSize) {
//     boxTypes.sort((a, b) => a[1]-b[1])
    
//     let maxSize = 0
//     let maxUnit = 0
    
//     for (let i = 0; i < boxTypes.length; i++) {
//         if (maxSize === truckSize) break
        
//         if (maxSize < truckSize) {
//             maxSize += boxTypes[i][0]
//             maxUnit += boxTypes[i][0] * boxTypes[i][1]
            
//             continue
//         }
        
//         if (maxSize > truckSize) {
//             let diff = maxSize - truckSize
            
//             maxSize -= boxTypes[i-1][0]
//             maxSize += diff
            
//             maxUnit -= boxTypes[i-1][0] * boxTypes[i-1][1]
//             maxUnit += diff * boxTypes[i-1][1]
            
//             continue
//         }
//     }
//     return maxUnit
// };


// var maximumUnits = function(boxTypes, truckSize) {
//     boxTypes.sort((a, b) => b[1]-a[1])
    
//     let maxUnit = 0
    
//     for (let i = 0; i < boxTypes.length; i++) {
//         let boxCount = Math.min(truckSize, boxTypes[i][0])
//         maxUnit += boxCount * boxTypes[i][1]
//         truckSize -= boxCount
//         if (truckSize === 0) break
//     }
    
//     return maxUnit
// }

//https://www.youtube.com/watch?v=qvz3bcvblJA
const maximumUnits = (boxTypes, truckSize) => {
    let maxUnit = 0
    boxTypes.sort((a, b) => {return b[1]-a[1]})
    
    for (let boxType of boxTypes) {
        let boxCount = Math.min(truckSize, boxType[0])
        
        maxUnit += boxCount * boxType[1]
        truckSize -= boxCount
        
        if (truckSize === 0) return maxUnit
    }
    return maxUnit
}