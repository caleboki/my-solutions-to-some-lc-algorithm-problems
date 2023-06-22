// https://leetcode.com/problems/decode-ways

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let map = new Map()
    
    const traverse = (index, s) => {
        if (map.has(index)) return map.get(index)
        
        if (index === s.length || index === s.length - 1) return 1
        
        if (s[index] === '0') return 0
        
        let ans = traverse(index + 1, s)
        
        if (Number(s.substring(index, index + 2)) <= 26) ans += traverse(index + 2, s)
        
        map.set(index, ans)
        return ans
        
    }
    
    return traverse(0, s)
    
    
    
};