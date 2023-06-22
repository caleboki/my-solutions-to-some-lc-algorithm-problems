// https://leetcode.com/problems/frog-jump

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    
    const dfs = (stones, index, k) => {
        
        for (let i = index + 1; i < stones.length; i++) {
            let gap = stones[i] - stones[index]
            
            if (gap >= k - 1 && gap <= k + 1) {
                if (dfs(stones, i, gap)) return true
            }
        }
        return index === stones.length - 1
    }
    return dfs(stones, 0, 0)
};

