// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */

const minDominoRotations = (tops, bottoms) => {
    const check = (x, tops, bottoms) => {
        let countTops = 0, countBottoms = 0
        
        for (let i = 0; i < tops.length; i++) {
            if (tops[i] !== x && bottoms[i] !== x) {
                return -1
            } else if (tops[i] !== x) {
                countTops++
            } else if (bottoms[i] !== x) {
                countBottoms++
            }
        }
        
        return Math.min(countTops, countBottoms)

    }
    
    
    let rotations = check(tops[0], tops, bottoms, n)
    
    if (rotations !== -1 || tops[0] === bottoms[0]) {
        return rotations
    } else {
        return check(bottoms[0], bottoms, tops)
    }
}