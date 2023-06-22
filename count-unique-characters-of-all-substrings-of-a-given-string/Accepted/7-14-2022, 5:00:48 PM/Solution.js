// https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string

/**
 * @param {string} s
 * @return {number}
 */
// var uniqueLetterString = function(s) {
//     let result = 0, map = new Map()
    
//     for (let i in s) {
//         if (!map.has(s[i])) {
//             map.set(s[i], [i])
//         } else {
//             let newV = map.get(s[i])
//             newV.push(i)
//             map.set(s[i], newV)
//         }
//     }

//     console.log(map)
//     let keys = Array.from(map.keys())
    
//     for (let j of keys) {
//         let lastIdx = +map.get(j)[0]
//         let lastRange = +map.get(j)[0] + 1
        
//         for (let i = 1; i < map.get(j).length; i++) {
            
//         }
//     }
    
//     return result
    
// };

// const uniqueLetterString = (s) => {
//     let result = 0
//     const hash = {}
    
//     for (let i = 0; i < s.length; i++) { // create the hash table contains every letter's index arr.
//         const letter = s[i];
//         if (hash[letter] === undefined) {
//             hash[letter] = [i];
//         } else {
//             hash[letter].push(i);
//         }
//     }
    
//     for (let letter in hash) {
//         const arr = hash[letter] // the arr contains all indexes the letter present in the string
//         let lastIdx = arr[0]
//         let lastRange = arr[0] + 1 // left part length
        
//         for (let i = 1; i < arr.length; i++) {
//             const currIdx = arr[i]
//             const currRange = currIdx - lastIdx // get range of current subbarray or right part length
//             result += lastRange * currRange //add to result
//             lastIdx = currIdx //update last index to current index
//             lastRange = currRange // set next left part to be current right part
//         }
//         result += lastRange * (s.length - lastIdx) // don't forget the last calcution 
//     }
    
//     return result
// }

var uniqueLetterString = function(s) {
    let currentUniqueCount = 0
    let lastPositionSeen = new Map()
    let contributions = new Map()
    let answer = 0
    
    for (let x = 0; x < s.length; x++) {
        
        const char = s[x];
        const prevContributions = contributions.has(char) ? contributions.get(char) : 0
        const newContributions = x + 1 - (lastPositionSeen.has(char) ? lastPositionSeen.get(char) + 1 : 0)
        
        currentUniqueCount = currentUniqueCount - prevContributions + newContributions
        
        contributions.set(char, newContributions)
        lastPositionSeen.set(char, x)

        answer += currentUniqueCount
    }
    
    return answer;
};