// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */

// Algorithm

// Pick up the first element. It has two sides: A[0] and B[0].

// Check if one could make all elements in A row or B row to be equal to A[0]. If yes, return the minimum number of rotations needed.

// Check if one could make all elements in A row or B row to be equal to B[0]. If yes, return the minimum number of rotations needed.

// Otherwise return -1.

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
    
    
    let rotations = check(tops[0], tops, bottoms)
    
    if (rotations !== -1 || tops[0] === bottoms[0]) {
        return rotations
    } else {
        return check(bottoms[0], bottoms, tops)
    }
}