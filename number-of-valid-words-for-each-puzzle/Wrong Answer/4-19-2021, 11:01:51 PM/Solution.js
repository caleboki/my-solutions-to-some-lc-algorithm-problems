// https://leetcode.com/problems/number-of-valid-words-for-each-puzzle

/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    let preAnswer = [];
    let map = {};
    let answer = [];
    
    for (let i = 0; i < words.length; i++) {
       //check if word contains the first letter in puzzle
        for (let j = 0; j < puzzles.length; j++) {
            if (words[i].includes(puzzles[j][0])) {
    
                let temp = [...words[i]];
                
                const isInStr = (currentValue) => puzzles[j].includes(currentValue);
                if (temp.every(isInStr)) {
                    preAnswer.push(puzzles[j]);
                }  
        }}   
    }
    
    preAnswer.forEach(p => {
        if (p in map) {
            map[p] += 1;
        } else {
            map[p] = 1;
        }
    })
    
    answer = Object.values(map);
    if (answer.length === puzzles.length) return answer;
    
    for (let k = 0; k < (puzzles.length - answer.length); k++) {
        answer.push(0);
    }
    
    return answer;   
};

