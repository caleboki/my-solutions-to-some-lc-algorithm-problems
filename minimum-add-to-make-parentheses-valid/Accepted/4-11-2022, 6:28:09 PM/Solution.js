// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0, min = 0
    
    for (let b of s) {
        if (b === '(') {
            open++
        } else if (open === 0) {
            min++
        } else {
            open--
        }
    }
    return open + min
};

// var minAddToMakeValid = function(s) {
//     let openBrack = 0;
//     let minNoOfMoves = 0;
    
//     for(let bracket of s) {
//         if(bracket === '(') openBrack++;
//         else if(!openBrack) minNoOfMoves++;
//         else openBrack--;
//     }
//     return openBrack + minNoOfMoves;
// };