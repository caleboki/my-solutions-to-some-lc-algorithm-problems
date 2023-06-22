// https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring

/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let ht = {}
    let max = 0
    
    for(let i=0; i<=s.length - minSize; i++){
        
        let sub = s.substring(i, i+ minSize)
        
        let tempSet = new Set(sub)
        
        if(tempSet.size <= maxLetters){
            if(ht.hasOwnProperty(sub)){
                ht[sub] += 1
            }else{
                ht[sub] = 1
            }
            if(ht[sub] > max ){
                max = ht[sub]
            }    
        }       
    }
    
    return max    
    
};