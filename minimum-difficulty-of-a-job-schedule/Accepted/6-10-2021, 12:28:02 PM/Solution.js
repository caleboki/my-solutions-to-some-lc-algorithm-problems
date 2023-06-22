// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */

//From: https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/discuss/490455/JavaScript-Dynamic-Programming-w-explanation

var minDifficulty = function(jobDifficulty, d) {
    // if we don't have enough jobs for the number of days return -1;
    if (d > jobDifficulty.length) return -1
    
    //Initialize the cache that will have the key of starting index
    // and number of days
    // the value will be the value of the max for the current job plus the
    // minimum total of all days after
    const cache = {}
    
    // Depth First Search using a bottom up approach
    // We want to return the minimum total difficulty for each starting index
    // corresponding to each number of days left 
    const dfs = (start, numDays) => {
        if (numDays === d) {
            return start === jobDifficulty.length ? 0 : Infinity
        }
        
        const key = `${start}-${numDays}`
        if (cache[key] !== undefined) return cache[key]
        const end = jobDifficulty.length - d + numDays
        
        let result = Infinity
        let max = -Infinity
        
        for (let i = start; i <= end; i++) {
            max = Math.max(max, jobDifficulty[i]);
            result = Math.min(result, max + dfs(i + 1, numDays + 1));
        }
        
        // save the result in the cach and return it;
        return cache[key] = result;
    }
    return dfs(0, 0)
 
};