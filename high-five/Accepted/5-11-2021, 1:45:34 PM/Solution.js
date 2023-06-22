// https://leetcode.com/problems/high-five

/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let students = {}
    let result = []
    
    for (let i = 0; i < items.length; i++) {  
        students[items[i][0]] = []
        
    }
    
    for (let j = 0; j < items.length; j++) {  
        students[items[j][0]].push(items[j][1])
    }
    
    for (let k = 0; k < Object.keys(students).length; k++) {
        
        let grades = Object.values(students)[k]
        grades.sort(function(a,b) { return b - a })
        grades.length = 5
        
        result.push([Object.keys(students)[k], grades.reduce((a, b) => a + b, 0)])
        
    }
    
    for (let l = 0; l < result.length; l++) {
        result[l][1] = Math.floor(result[l][1]/5)
    }
     
    return (result)
    
};