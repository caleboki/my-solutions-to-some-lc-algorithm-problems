// https://leetcode.com/problems/analyze-user-website-visit-pattern

/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    
    let userMap = {}
    
    for (let i = 0; i < username.length; i++) { 
        userMap[username[i]] = []  
    }
    for (let i = 0; i < username.length; i++) { 
        userMap[username[i]].push([timestamp[i], website[i]]) 
    }
    
    console.log(userMap)
};

