// https://leetcode.com/problems/integer-to-english-words

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return 'Zero'
    
    let finalString = [];
    
    [...numberToWordMap.keys()].reverse().map(key => {
        if (num >= key) {
            if (key >= 100) {
                const numberOfTimesKeyFitsNum = Math.floor(num / key);
                const number = memoize[numberOfTimesKeyFitsNum] ? memoize[numberOfTimesKeyFitsNum] : numberToWords(numberOfTimesKeyFitsNum);
                if (!memoize[numberOfTimesKeyFitsNum]) memoize[numberOfTimesKeyFitsNum] = number;
                
                finalString.push(number + ' ' + numberToWordMap.get(key) + ' ')
            }
            else {
                finalString.push(numberToWordMap.get(key) + ' ')
            }
               
            num = num % key;
        }
    });
    
    finalString = finalString.join('');
    
    return finalString.slice(0, finalString.length - 1);
};

let memoize = {};

let numberToWordMap = new Map();
numberToWordMap.set(1, 'One')
numberToWordMap.set(2, 'Two')
numberToWordMap.set(3, 'Three')
numberToWordMap.set(4, 'Four')
numberToWordMap.set(5, 'Five')
numberToWordMap.set(6, 'Six')
numberToWordMap.set(7, 'Seven')
numberToWordMap.set(8, 'Eight')
numberToWordMap.set(9, 'Nine')
numberToWordMap.set(10, 'Ten')
numberToWordMap.set(11, 'Eleven')
numberToWordMap.set(12, 'Twelve')
numberToWordMap.set(13, 'Thirteen')
numberToWordMap.set(14, 'Fourteen')
numberToWordMap.set(15, 'Fifteen')
numberToWordMap.set(16, 'Sixteen')
numberToWordMap.set(17, 'Seventeen')
numberToWordMap.set(18, 'Eighteen')
numberToWordMap.set(19, 'Nineteen')
numberToWordMap.set(20, 'Twenty')
numberToWordMap.set(30, 'Thirty')
numberToWordMap.set(40, 'Forty')
numberToWordMap.set(50, 'Fifty')
numberToWordMap.set(60, 'Sixty')
numberToWordMap.set(70, 'Seventy')
numberToWordMap.set(80, 'Eighty')
numberToWordMap.set(90, 'Ninety')
numberToWordMap.set(100, 'Hundred')
numberToWordMap.set(1000, 'Thousand')
numberToWordMap.set(1000000, 'Million')
numberToWordMap.set(1000000000, 'Billion')