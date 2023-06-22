// https://leetcode.com/problems/confusing-number-ii

/**
 * @param {number} n
 * @return {number}
 */
var confusingNumberII = function(n) {
    let count = 0

    const confusingNumber = (n) => {
        if (n === "") return true
        let map = new Map()
        let result = []
        
        map.set(0, 0)
        map.set(1, 1)
        map.set(6, 9)
        map.set(8, 8)
        map.set(9, 6)

        n = n.toString().split('')

        for (let i of n) {
            if (!map.has(Number(i))) return false
            result.unshift(map.get(Number(i)))
        }
        n = Number(n.join(''))
        
        return Number(result.join('')) !== n
    }

    for (let i = 1; i < n + 1; i++) {
        if (confusingNumber(i)) count++
    }

    return count


    
};