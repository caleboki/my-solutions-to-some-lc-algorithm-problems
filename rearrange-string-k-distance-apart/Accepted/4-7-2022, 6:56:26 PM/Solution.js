// https://leetcode.com/problems/rearrange-string-k-distance-apart

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
    let count = {}, nextPosition = {}, sb = ''
    
    for (let alpha of s) {
        if (alpha in count) {
            count[alpha]++
        } else {
            count[alpha] = 1
        }
        
        nextPosition[alpha] = 0
    }
    
    for (let i = 0; i < s.length; i++) {
        let candidate = findCandidate(count, nextPosition, i)
        
        if (candidate === "") return ""
        count[candidate]--
        nextPosition[candidate] = i + k
        sb += candidate
        
    }
    
    return sb
};


const findCandidate = (count, nextPosition, index) => {
    let max = -Infinity, candidate = ""
    
    for (let i in count) {
        
        if (count[i] > 0 && count[i] > max && index >= nextPosition[i]) {
            max = count[i]
            candidate = i
        }
    }
    
    return candidate
}
    
    