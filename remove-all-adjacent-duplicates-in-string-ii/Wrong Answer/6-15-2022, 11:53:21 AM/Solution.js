// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    
    let map = new Map(), sb = ''
    
    for (let i = 0; i < s.length; i++) {
        
        if (!map.has(s[i])) map.set(s[i], 0)
        map.set(s[i], map.get(s[i]) + 1)
        
        if (map.get(s[i]) === k) map.delete(s[i])

    }
    map = Array.from(map)
    
    for (let item of map) {
        let [char, count] = item
    
        sb += char.repeat(count)
        
    }
    
    return (sb)
    
    
};