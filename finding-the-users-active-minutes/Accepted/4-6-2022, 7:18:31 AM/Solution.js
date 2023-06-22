// https://leetcode.com/problems/finding-the-users-active-minutes

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let answer = new Uint16Array(k), map = {}
    
    for (let log of logs) {
        if (!(log[0] in map)) {
            map[log[0]] = new Set()
            map[log[0]].add(log[1])
        } else {
            map[log[0]].add(log[1])
        }
    }
    
    for (let id in map) {
        let size = map[id].size
        
        answer[size-1] += 1
    }
    
    return answer
};