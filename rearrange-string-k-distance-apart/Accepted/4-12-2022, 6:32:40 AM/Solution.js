// https://leetcode.com/problems/rearrange-string-k-distance-apart

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// Since this is a greedy question, for sure we need to consider placing the characters with higher frequencies first. Thus we first construct a map between characters and their corresponding frequencies. Meanwhile, since the same character must be at least distance k from each other, we keep another map between each character and their next valid position, say we have put 'a' at index i, then the next valid position of 'a' should be greater than or equal to i + k.

// During the process we iterate through the input String, we first get the first character among 'a' to 'z' that satisfy:

// It has the highest frequency among the remaining characters.
// Current index we are considering is at least distance k from the previous position of this character, that is to say, the next valid position of this character should be less than or equal to current index.
// If we cannot find a match, that means a result satisfies the question requirement is not possible, return "".

// Otherwise, we reduce frequency of current character by 1 and update its next valid position.

var rearrangeString = function(s, k) {
    let count = {}, nextPosition = {}, stringBuilder = ''
    
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
        stringBuilder += candidate
    }
    return stringBuilder
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
    
    