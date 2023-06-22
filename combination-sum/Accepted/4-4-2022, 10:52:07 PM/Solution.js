// https://leetcode.com/problems/combination-sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


var combinationSum = function(candidates, target) {
    
    const helper = (tar, index = 0) => {
        if (tar < 0) return []
        
        const result = []
        
        for (let i = index; i < candidates.length; i++) {
            if (tar === candidates[i]) result.push([candidates[i]])
            
            const rem = tar-candidates[i]
            const paths = helper(rem, i)
            
            if (paths.length) result.push(...paths.map(p => [candidates[i], ...p]))
            
        }
        
        return result
    }
    
    return helper(target)
};

