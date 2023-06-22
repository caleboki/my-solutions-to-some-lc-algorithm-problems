// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters

/**
 * @param {string[]} arr
 * @return {number}
 */
// var maxLength = function(arr) {
//     let results = [""]
//     let best = 0
    
//     for (let word of arr) {
//         let resultsLen = results.length
//         for (let i = 0; i < resultsLen; i++) {
//             let newRes = results[i] + word
            
//             let newResSet = new Set(newRes.split(""))
         
//             if (newRes.length !== newResSet.size) continue //i.e sub-sequence is not unique
            
//             results.push(newRes)
//             best = Math.max(best, newRes.length)
//         }
        
//     }
//     return best
    
// };

var maxLength = function(arr) {
    const dfs = (arr, position, resMap) => {
        for (let value of resMap.values()) if (value > 1) return 0
        let best = resMap.size
        
        for (let i = position; i < arr.length; i++) {
            let word = arr[i]
            for (let c of word) resMap.set(c, (resMap.get(c) || 0) + 1)
            best = Math.max(best, dfs(arr, i+1, resMap))
            
            for (let c of word) {
                if (resMap.get(c) === 1) {
                    resMap.delete(c)
                } else {
                    resMap.set(c, resMap.get(c) - 1)
                }
            }
        }
        return best
    }
    return dfs(arr, 0, new Map())
}