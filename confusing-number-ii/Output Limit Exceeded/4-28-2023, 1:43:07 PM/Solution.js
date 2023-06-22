// https://leetcode.com/problems/confusing-number-ii

/**
 * @param {number} n
 * @return {number}
 */
// var confusingNumberII = function(n) {
//     let count = 0

//     const confusingNumber = (n) => {
//         if (n === "") return true
//         let map = new Map()
//         let result = []
        
//         map.set(0, 0)
//         map.set(1, 1)
//         map.set(6, 9)
//         map.set(8, 8)
//         map.set(9, 6)

//         n = n.toString().split('')

//         for (let i of n) {
//             if (!map.has(Number(i))) return false
//             result.unshift(map.get(Number(i)))
//         }
//         n = Number(n.join(''))
        
//         return Number(result.join('')) !== n
//     }

//     for (let i = 1; i < n + 1; i++) {
//         if (confusingNumber(i)) count++
//     }

//     return count
// };

function confusingNumberII(n) {
    const pairs = [
        [0, 0],
        [1, 1],
        [6, 9],
        [8, 8],
        [9, 6]
    ];

    let count = 0;

    function dfs(num, rotatedNum, digitValue) {
        if (num > n) return;

        if (num !== rotatedNum) count++;

        for (const [digit, rotatedDigit] of pairs) {
            const newNum = num * 10 + digit;
            console.log(newNum)
            if (newNum === 0) continue; // Skip leading zeros

            dfs(newNum, (rotatedDigit * digitValue) + rotatedNum, digitValue * 10);
        }
    }

    dfs(0, 0, 1);

    return count;
}
