// https://leetcode.com/problems/maximum-number-of-balloons

/**
 * @param {string} text
 * @return {number}
 */
// var maxNumberOfBalloons = function(text) {
//     let textMap = new Map(), matched = 0, count = 0, a = 'balloon', i = 0

//     for (let t of text) {
//         if (!textMap.has(t)) textMap.set(t, 0)
//         textMap.set(t, textMap.get(t) + 1)
//     }
//     while(textMap.size > 0) {
//         if (textMap.get(a[i]) <= 0) {
//             console.log('calleing')
//             textMap.delete(a[i])
//         }
//         if (textMap.has(a[i]) && textMap.get(a[i]) > 0) {
//             textMap.set(a[i], textMap.get(a[i]) - 1)
//             matched++
//             console.log(matched)
//         }

//         if (matched === 7) {
//             count++
//             matched = 0
//         }
//         //console.log(a[i])
//         i++
//         if (i > 6 && textMap.size === 7) return 0
//         if (i > 6) i = 0
//     }
//     return count
// };

const BALLOON = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
};

var maxNumberOfBalloons = function(text) {
    const hashmap = new Map();
    
    for (let i = 0; i < text.length; i++) {
        if (hashmap.has(text[i])) {
            hashmap.set(text[i], hashmap.get(text[i]) + 1);
        } else {
            hashmap.set(text[i], 1);
        }
    }
    
    let output = Infinity;
    const arr = Object.keys(BALLOON);
    for (let i = 0; i < arr.length; i++) {
        const character = arr[i];
        if (!hashmap.has(character)) return 0;

        output = Math.min(Math.floor(hashmap.get(character)/(BALLOON[character])), output)
    }
    return output;
};