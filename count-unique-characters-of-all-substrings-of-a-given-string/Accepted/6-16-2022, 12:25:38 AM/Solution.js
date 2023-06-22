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

const uniqueLetterString = (s) => {
    let result = 0
    const hash = {}
    
    for (let i = 0; i < s.length; i++) { // create the hash table contains every letter's index arr.
        const letter = s[i];
        if (hash[letter] === undefined) {
            hash[letter] = [i];
        } else {
            hash[letter].push(i);
        }
    }
    
    for (let letter in hash) {
        const arr = hash[letter]
        let lastIdx = arr[0]
        let lastRange = arr[0] + 1
        
        for (let i = 1; i < arr.length; i++) {
            const currIdx = arr[i]
            const currRange = currIdx - lastIdx
            result += lastRange * currRange
            lastIdx = currIdx
            lastRange = currRange
        }
        result += lastRange * (s.length - lastIdx)
    }
    
    return result
}