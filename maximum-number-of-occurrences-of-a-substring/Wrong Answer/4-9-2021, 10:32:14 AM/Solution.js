// https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring

/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
     let map = {}
     let max = 0
    
    for(let i=0; i<=s.length - minSize; i++){
        
        let sub = s.substring(i, i+ minSize) //substring of s, up to minSize
        
        let tempSet = new Set(sub) //using set to make string unique
       
        //satisfying first condition
            
            //creating a frequency map
            if(map.hasOwnProperty(sub)){
                map[sub] += 1
            }else{
                map[sub] = 1
            }
            if(map[sub] > max ){
                max = map[sub]
            }
            
               
    }
    
    return max 
    
};