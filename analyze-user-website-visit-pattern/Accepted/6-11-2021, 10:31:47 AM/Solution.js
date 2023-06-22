// https://leetcode.com/problems/analyze-user-website-visit-pattern

/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
// var mostVisitedPattern = function(username, timestamp, website) {
    
//     let userMap = {}
    
//     for (let i = 0; i < username.length; i++) { 
//         userMap[username[i]] = []  
//     }
//     for (let i = 0; i < username.length; i++) { 
//         userMap[username[i]].push([timestamp[i], website[i]]) 
//     }
    
//     console.log(userMap)
// };

var mostVisitedPattern = function(username, timestamp, website) {
    // set a map by username
    const userMap = username.reduce((map, curr, i) => {
        const time = timestamp[i], web = website[i];
        if(map.has(curr)) {
            map.get(curr).push([time, web]);
        } else {
            map.set(curr, [[time, web]]);
        }
        return map;
    }, new Map())
    const getPath = val => {
        const paths = [];
        const backTrack = (ind, arr) => {
            if(arr.length === 3) {
                paths.push(arr.slice());
                return;
            }
            for(let i = ind; i < val.length; i++) {
                arr.push(val[i][1]);
                backTrack(i + 1, arr);
                arr.pop();
            }
        }
        backTrack(0, []);
        return paths;
    }
    const getFreqOfPaths = () => {
        const freq = new Map();
        for(const [name, val] of [...userMap.entries()]) {
            // get all unique paths for the user
            const pathSet = new Set(
                getPath(val.sort((a, b) => a[0] - b[0])) // sort by timestamp before back tracking
                .map(([one, two, three]) => `${one},${two},${three}`)); // convert to string 
            for(const pathStr of [...pathSet.values()]) {
                freq.set(pathStr, freq.get(pathStr) + 1 || 1);
            }
        }
        return freq;
    }
    const freqOfPaths = getFreqOfPaths();
    let max = 0;
    // get the most frequent path
    return [...freqOfPaths.keys()].reduce((prev, str) => {
        if(freqOfPaths.get(str) > max) {
            max = freqOfPaths.get(str);
            return str;
        } else if(freqOfPaths.get(str) === max) {
            return str < prev ? str : prev;
        }
        return prev;
    }, '').split(',');
};