// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let map = {}, j = 0, max = 0
    
//     for (let i = 0; i < s.length; i++) {
//         // if the map already contains the 's[i]', shrink the window from the beginning so that
//         // we have only one occurrence of 's[i]'
//         if (s[i] in map) j = Math.max(j, map[s[i]] + 1)
        
//         map[s[i]] = i
        
//         max = Math.max(max, i - j + 1)
//     }
//     return max
// };

// "abcabcbb"
// i = 0
// j = 0, max = 0
// {a: 0}, max = Math.max(0, 0-0+1) = 1

// i = 1
// j = 0
// {a: 0, b:1}, max = Math.max(1, 1-0+1) = 2

// i = 2
// j = 0
// {a: 0, b:1, c:2},  max = Math.max(2, 2 - 0 + 1) = 3

// i = 3
// j = Math.max(0, 3+1) = 4
// {a: 0, b:1, c:2}, max = Math.max(3, 3-4+1) = 3

// i = 4
// j = math.max(4, 1+1) = 4
// {a: 0, b:4, c:2}, max = Math.max(3, 4-4+1) = 3

const lengthOfLongestSubstring = (s) => {
    let max = 0, j = 0, map = new Map()
    
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) j = Math.max(j, map.get(s[i]) + 1)
        
        map.set(s[i], i)
        max = Math.max(max, i-j+1)
    }
    return max
}

//brute force-self explanatory
// const lengthOfLongestSubstring = (s) => {
//     let res = 0
    
//     const checkRepetition = (s, start, end) => {
//         let map = {}
        
//         for (let i = start; i <= end; i++) {
//             if (!(s[i] in map)) map[s[i]] = 0
//             map[s[i]]++
            
//         }
        
//         let keys = Object.keys(map)
        
//         for (let i = 0; i < keys.length; i++) {
//             if (map[keys[i]] > 1) return false
//         }
//         return true
//     }
    
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             if (checkRepetition(s, i, j)) res = Math.max(res, j - i + 1)
//         }
//     }
    
//     return res
// }






