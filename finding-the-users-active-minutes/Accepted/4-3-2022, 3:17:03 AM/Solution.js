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

// class Solution {
//     public int[] findingUsersActiveMinutes(int[][] logs, int k) {
//         int[] res = new int[k];
//         Map<Integer,Set<Integer>> map = new HashMap<>();
        
//         for(int i = 0;i<logs.length;i++){
//             map.putIfAbsent(logs[i][0],new HashSet<>());
//             map.get(logs[i][0]).add(logs[i][1]);
//         }
//         for(var item : map.keySet()){
//             int size = map.get(item).size();
//             res[size-1] += 1;
//         }
            
//         return res;
//     }
// }