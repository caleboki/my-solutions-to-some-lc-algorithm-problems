// https://leetcode.com/problems/number-of-valid-words-for-each-puzzle

/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    let map = {};
    let answer = [];
    let result = [];
    
    for (puzzle in puzzles) {
        map[puzzles[puzzle]] = 0;  
    }
    
    
    for (let i = 0; i < words.length; i++) {
       //check if word contains the first letter in puzzle
        for (let j = 0; j < puzzles.length; j++) {
            if (words[i].includes(puzzles[j][0])) {
                //check if each letter in word is in puzzle
                let temp = [...words[i]];
                
                const isInStr = (currentValue) => puzzles[j].includes(currentValue);
                
                if (temp.every(isInStr)) {
                    result.push(puzzles[j]);
                } 
                
                
        }}   
    }
    
    result.forEach(p => {
        if (p in map) {
            map[p] += 1;
        }
    })
    
    answer = Object.values(map);
    return answer;
 
};

