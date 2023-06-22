// https://leetcode.com/problems/counting-bits

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = []
    const convertToBinary = (i) => {
        let res = []
        while (i > 0) {
            res.push(i % 2)
            if (i === 1) break
            i = Math.floor(i/2)
        }
        res.reverse()
        ans.push(res.filter(f => f === 1).length)
    }

    for (let i = 0; i < n+1; i++) {
        convertToBinary(i)
    }

    return ans
    
};