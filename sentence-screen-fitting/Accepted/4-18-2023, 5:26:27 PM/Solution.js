// https://leetcode.com/problems/sentence-screen-fitting

/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
// var wordsTyping = function(sentence, rows, cols) {
    
// };

var wordsTyping = function(sentence, rows, cols) {
    let count = 0
    let i = 0 // index of current word
    for (let r = 0; r < rows; r++) {
        let col = 0 // current column
        while (col < cols) {
            if (sentence[i].length > cols - col) {
                break // word doesn't fit on row
            }
            col += sentence[i].length + 1 // add 1 for space between words
            i++ // move to next word
            if (i === sentence.length) {
                count++ // sentence fits on screen
                i = 0 // start over with first word
            }
        }
    }
    return count
};
