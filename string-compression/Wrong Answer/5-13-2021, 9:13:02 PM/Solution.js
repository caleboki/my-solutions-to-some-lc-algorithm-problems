// https://leetcode.com/problems/string-compression

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let map = {}
    let len = chars.length
    
    for (c of chars) {
        if (map[c] === undefined ) {
            map[c] = 1
        } else {
            map[c]++
        }
    }
    console.log(map)
    let keys = Object.keys(map)
    let values = Object.values(map)
    
    for (let i = 0; i < keys.length; i++) {
        chars.push(keys[i])
        chars.push(values[i].toString())
    }
    
    chars.splice(0, len)
};