// https://leetcode.com/problems/number-of-ways-to-split-a-string

/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
    const countOnes = (string) => {
        let map = {}
        
        for (let s of string) {
            
            if (s === '1') {
                if (map[s] === undefined) {
                    map[s] = 1
                } else {
                    map[s]++
                }
            }
        }
        
        let key = '1'
        if (map[key] !== undefined) return map[key]
        return 0
    }
    
    let count = 0, slen = s.length, point1 = slen.length-2, i = 2
    
    while (i < slen) {
        point1 = slen - i
        let point2 = slen - 1

        while (point2 > point1) {
          let a = s.substring(0, point1)
          let b = s.substring(point1, point2)
          let c = s.substring(point2, s.length)
       
          if ((countOnes(a) === countOnes(b)) && (countOnes(b) === countOnes(c))) count++
          point2--
        }
        i++
    }
    return count
    
};