// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// var removeDuplicates = function(s, k) {
    
//     let map = new Map(), sb = ''
    
//     for (let i = 0; i < s.length; i++) {
        
//         if (!map.has(s[i])) map.set(s[i], 0)
//         map.set(s[i], map.get(s[i]) + 1)
        
//         if (map.get(s[i]) === k) map.delete(s[i])

//     }
//     console.log(map)
   
//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             sb += s[i].repeat(map.get(s[i]))
//             map.delete(s[i])
//         }
//     }
    
//     return (sb)
    
    
// };


var removeDuplicates = function(s, k) {
    
    let map = [], sb = ''
    
    for (let i = 0; i < s.length; i++) {
        
        if (map.length > 0 && map[map.length - 1][0] === s[i]) {
            map[map.length - 1][1]++
        } else {
            map.push([s[i], 1])
        }
        
        if (map[map.length - 1][1] === k) map.pop()
    }
    
    for (let i in s) {
        sb += map[i][0].repeat(map[i][1])
    }
    
    return sb
    
    
};